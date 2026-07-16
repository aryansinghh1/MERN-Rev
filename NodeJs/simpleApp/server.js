const express = require("express");
const morgan = require("morgan");
const PORT = 3000;

const app = express();

app.use(morgan("dev"));

app.get("/login", (req, res) => {
  res.send("This is login page");
});
app.get("/signup", (req, res) => {
  res.send("This is login page");
});

app.listen(PORT, () => console.log("server is running"));
