import express from "express";
import morgan from "morgan";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFile = path.join(__dirname, "..", "data", "users.json");
const coursesFile = path.join(__dirname, "..", "data", "courses.json");

const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    jwtSecret,
    { expiresIn: "1h" }
  );
};

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authentication token is required" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedUser = jwt.verify(token, jwtSecret);
    req.user = decodedUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

app.get("/", (req, res) => {
  res.json({ message: "simpleApp server is running" });
});

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "All information is required for signup",
      });
    }

    const users = JSON.parse(await fs.readFile(usersFile, "utf-8"));

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "student",
    };

    users.push(newUser);

     const { password: _, ...userData } = newUser;

    await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

    const token = generateToken(newUser);

    return res.status(201).json({
      message: "Signup successful",
      token,
      user: userData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to complete signup",
    });
  }
});

app.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required for login",
      });
    }

    const users = JSON.parse(await fs.readFile(usersFile, "utf-8"));
    const user = users.find((currentUser) => currentUser.email === email);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const { password: userPassword, ...safeUser } = user;
    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      token,
      user: safeUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to complete login",
    });
  }
});

app.get("/courses", authenticate, async (req, res) => {
  try {
    const courses = JSON.parse(await fs.readFile(coursesFile, "utf-8"));
    return res.status(200).json({
      message: "Authenticated courses fetched successfully",
      courses,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch courses" });
  }
});

app.get("/profile", authenticate, async (req, res) => {
  try {
    const users = JSON.parse(await fs.readFile(usersFile, "utf-8"));
    const user = users.find((currentUser) => currentUser.id === req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password: userPassword, ...safeUser } = user;

    return res.status(200).json({
      message: "Profile fetched successfully",
      user: safeUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch profile" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
