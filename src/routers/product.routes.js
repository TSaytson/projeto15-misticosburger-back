import { Router } from 'express';
import { addProduct, getProducts, deleteProduct, updateProduct } from '../controllers/product.controller.js';


const router = Router();

router.post('/products', addProduct);
router.get('/products', getProducts);
router.delete('/products:id', deleteProduct);
router.put('/products:id', updateProduct);


export default router;