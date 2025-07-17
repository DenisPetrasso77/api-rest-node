import { Router } from "express";

const router = Router();


import { getAllProducts, searchProducts, getProductsById} from "../controllers/products.controllers.js";

//Obtener Productos
router.get('/products', getAllProducts );
//Busqueda por Nombre
router.get('/products/search',searchProducts );
//Obtener producto por ID
router.get('/products/:id', getProductsById );

export default router;