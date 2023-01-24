import { Router } from 'express';
import { authValidation } from '../middlewares/auth.middlewares.js';
import { signIn, signUp } from '../controllers/auth.controllers.js';

const router = Router();

router.post('/signUp', authValidation, signUp);
router.post('/signIn', signIn);

export default router;