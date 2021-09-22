import express from "express";
import { addOrderItem, getOrder } from "../controllers/orderController.js";
import authenticateUserThrowToken from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(authenticateUserThrowToken, addOrderItem);
router.route("/:id").get(authenticateUserThrowToken, getOrder);

export default router;
