import { Router } from 'express';
// import { authValidation } from '../middlewares/auth.middlewares.js';
import { signIn, signUp } from '../controllers/auth.controllers.js';
import { signInSchema, signUpSchema } from '../schemas/auth.schemas.js'
import { validateSchema } from "../middlewares/validadeSchema.js"

const router = Router();

router.post('/signUp', validateSchema(signUpSchema),signUp);
router.post('/signIn',validateSchema(signInSchema), signIn);

export default router;