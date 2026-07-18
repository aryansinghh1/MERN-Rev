import express from "express";
import morgan from "morgan";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFile = path.join(__dirname, "..", "data", "users.json");

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

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

    const hashedPassword = await (bcrypt.hash(password,10));

    const newUser = {
      id: users.length + 1,
      firstName,
      lastName,
      email,
      password : hashedPassword,
      role: "student",
    };

    users.push(newUser);

    await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

    return res.status(201).json({
      message: "Signup successful",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to complete signup",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});