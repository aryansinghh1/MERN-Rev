// import fs from 'fs/promises';
// import { coursePath } from '../index.js';
import Course from "../models/Course.js";
import User from "../models/User.js";

export const getCourses = async (req, res) => {
  try {
    // const courses = JSON.parse( await fs.readFile(coursePath, 'utf-8'));
    const courses = await Course.find();

    if (!courses || courses.length === 0) {
      res.json({ message: "No available course right now", courses: [] });
      return;
    }

    res.json({
      message: "Courses fetched",
      courses,
    });
    return;
  } catch (err) {
    console.log("error: ", err);
    res.json({ message: "Error while fetching courses, try again!" });
    return;
  }
};

export const addCourse = async (req, res) => {
  try {
    const { title, price, duration, level, imageUrl } = req.body;
    const newCourse = await Course.create({
      title,
      instructorId: req.user.id,
      price,
      duration,
      level,
      imageUrl,
    });

    await User.findByIdAndUpdate(req.user.id,{
      $push:{
        createdCourses: newCourse._id
      }
    })

    res.json({
      message: "New course is added",
      newCourse,
    });
  } catch (err) {
    console.log("Error", err);
  }
};
