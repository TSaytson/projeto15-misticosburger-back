import { Router } from 'express';
import authRoutes from '../routers/auth.routes.js'
import productsRoutes from '../routers/product.routes.js'

const router = Router();

router.use([authRoutes, productsRoutes]);

export default router;