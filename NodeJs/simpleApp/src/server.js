import express from "express";
import morgan from "morgan";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    console.log("Data:", data);

    const usersFile = path.join(__dirname, "..", "data", "users.json");

    const users = JSON.parse(await fs.readFile(usersFile, "utf-8"));

    console.log(users);

    res.status(200).json({
      message: "Signup route reached",
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to read users data",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});