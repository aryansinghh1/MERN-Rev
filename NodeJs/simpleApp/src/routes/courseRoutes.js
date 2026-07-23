import { Router } from "express";
import { getCourses, addCourse } from "../controllers/courseController.js";
import { authenticate } from "../middleware/authenticate.js";
import { authorize } from "../middleware/authorize.js";

const router = Router();

router.get('/get-courses', getCourses);

router.post('/add-course', authenticate, authorize('instructor'), addCourse);

// router.get('/mycourses', myCourses);

export default router;