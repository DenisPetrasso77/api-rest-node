import { Router } from "express";

const router = Router();


import { getAllProducts, searchProducts, getProductById, createProduct, deleteProduct} from "../controllers/products.controllers.js";

//Obtener todos los Productos
router.get('/products', getAllProducts );
//Obtener producto por Busqueda
router.get('/products/search',searchProducts );
//Obtener producto por ID
router.get('/products/:id', getProductById );
//Crear un producto
router.post('/products', createProduct);
//Borrar un producto
router.delete('/products/:id', deleteProduct);


export default router;