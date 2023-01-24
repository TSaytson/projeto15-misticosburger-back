import { Router } from 'express';
import authRoutes from '../routers/auth.routes.js'

const router = Router();

router.use([authRoutes]);

export default router;