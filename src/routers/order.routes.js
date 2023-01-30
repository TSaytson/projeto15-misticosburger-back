import { Router } from "express";
import { addOrder, getOrders, getOrdersByUser, deleteOrder } from "../controllers/order.controllers.js";


const router = Router();

router.post("/orders", addOrder);
router.get("/orders", getOrders);
router.get("/orders/:userId", getOrdersByUser);
router.delete("/orders/:orderId", deleteOrder);


export default router;