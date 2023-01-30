import { Router } from 'express';
import authRoutes from '../routers/auth.routes.js'
import productsRoutes from '../routers/product.routes.js'
import orderRoutes from '../routers/order.routes.js'
import userRoutes from '../routers/user.routes.js'

const router = Router();

router.use([authRoutes, productsRoutes, orderRoutes, userRoutes]);

export default router;