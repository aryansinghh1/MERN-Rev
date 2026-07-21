import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import { usersFile } from "../config/dataPaths.js";

const jwtSecret = process.env.JWT_SECRET;

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    jwtSecret,
    { expiresIn: "7d" }
  );
};


export const signup = async (req, res) => {
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
};

export const login = async (req, res) => {
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
};

export const getProfile = async (req, res) => {
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
};

