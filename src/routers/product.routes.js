import { Router } from 'express';
import { addProduct, getProducts, deleteProduct } from '../controllers/product.controller.js';


const router = Router();

router.post('/product', addProduct);
router.get('/product', getProducts);
router.delete('/product/:id', deleteProduct);

export default router;