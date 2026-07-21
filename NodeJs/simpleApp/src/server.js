import express from "express";
import morgan from "morgan";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRoutes from "./routes/authRoutes";

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
app.use('/auth',authRoutes);

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
