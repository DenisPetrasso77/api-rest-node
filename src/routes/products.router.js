import { Router } from "express";

const router = Router();


import { getAllProducts, searchProducts, getProductById, createProduct} from "../controllers/products.controllers.js";

//Obtener Productos
router.get('/products', getAllProducts );
//Busqueda por Nombre
router.get('/products/search',searchProducts );
//Obtener producto por ID
router.get('/products/:id', getProductById );

router.post('/products', createProduct);



export default router;