import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userControllers.js";
import authenticateUserThrowToken from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(authenticateUserThrowToken, getUserProfile);

export default router;
