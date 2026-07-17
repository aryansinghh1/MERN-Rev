const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/login", (req, res) => {
  res.json({message:'hello'});
  return;
});

app.post("/signup", (req, res) => {
  const data = req.body;
});

app.listen(port, () => console.log("server is running"));
