import { Router } from "express";
import { login, signup, getProfile } from "../controllers/authController.js";
import { authenticate } from "../middleware/authMiddleware.js";


const router = Router();

router.post("/signup", signup);

router.post("/login", login);
router.get("/profile", authenticate, getProfile);

export default router;
