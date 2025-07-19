import { Router } from "express";
const router = Router();


import { getAllProducts, searchProducts, getProductById, createProduct, deleteProduct, updateProduct} from "../controllers/products.controllers.js";

import {auth} from '../middlewares/auth.middleware.js';

//Obtener todos los Productos
router.get('/products', getAllProducts );
//Obtener producto por Busqueda
router.get('/products/search',searchProducts );
//Obtener producto por ID
router.get('/products/:id', auth, getProductById);
//Crear un producto
router.post('/products', createProduct);
//Borrar un producto
router.delete('/products/:id', deleteProduct);
//Modificar un producto
router.put("/products/:id", updateProduct);

//Deefault me permite llamarlo como yo quiera
export default router;