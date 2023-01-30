import { Router } from "express";
import { addOrder, getOrders } from "../controllers/order.controllers.js";


const router = Router();

router.post("/orders", addOrder);
router.get("/orders", getOrders);

export default router;