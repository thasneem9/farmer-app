import express from 'express'
import { getProducts, uploadProduct } from '../controller/productController.js';



const router=express.Router();


router.get("/getProducts",getProducts)

router.post("/uploadProduct",uploadProduct)


export default router;