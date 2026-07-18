const express = require("express");
const morgan = require("morgan");
const fs = require("fs/promises");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello" });
  return;
});

app.post("/signup", async (req, res) => {
  try {
    const data = req.body;
    console.log("Data", data);

    const usersFile = path.join(__dirname, "..", "data", "users.json");
    const users = JSON.parse(await fs.readFile(usersFile, "utf-8"));

    console.log("users", users);
    res.status(200).json({ message: "signup route reached", users });
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to read users data" });
  }
});

app.listen(port, () => console.log(`server is running ${port}`));
