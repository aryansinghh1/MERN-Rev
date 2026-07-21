import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";


dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
