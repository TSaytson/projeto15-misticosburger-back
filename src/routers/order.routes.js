import { Router } from "express";
import { addOrder, getOrders, getOrdersByUser } from "../controllers/order.controllers.js";


const router = Router();

router.post("/orders", addOrder);
router.get("/orders", getOrders);
router.get("/orders/:userId", getOrdersByUser);


export default router;