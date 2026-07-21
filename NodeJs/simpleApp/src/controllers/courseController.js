import fs from "fs/promises";
import { coursesFile } from "../config/dataPaths.js";

export const getAllCourses =  async (req, res) => {
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
};