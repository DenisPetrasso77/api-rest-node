import * as Service from "../models/product.models.js";

export const getAllProducts = async (req,res) => {
   const products = await Service.getAllProducts();
   res.json(products);
}
//ok
export const searchProducts = async (req,res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({error: 'El nombre es requerido'})
    }

    const products = await Service.getAllProducts();

    const productsFiltered = products.filter((item) =>
         item.name.toLowerCase().includes(name.toLowerCase() )
    );

    if(productsFiltered.length == 0){
        return res.status(404).json({error: "No se encontraron productos" });
    }
    res.json(productsFiltered);
};
//ok
export const getProductById = async (req,res) => {
    const {id} = req.params;
    const product = await Service.getProductById(id);
    if(product) {
        res.json(product);
    } else {
         res.status(404).json({error: "No existe el producto"})
    }
};
//ok
export const createProduct = async (req, res) => {
    try{
    const {name, price, categories } = req.body;
    
   const newProduct =  await Service.createProduct({name, price, categories});

    res.status(201).json(newProduct);
    } catch (error) {

        console.log(error)
        res.status(500).json({message: 'error al crear el producto'})
    }
};
//ok
export const deleteProduct = async  (req, res) => {
    try {
        const {id} = req.params;
        const deleted = await Service.deleteProduct(id);

        if(!deleted){
        return res.status(404).json({ error: "Producto no encontrado"});
    }

    res.status(204).send();
} catch (error) {
    console.log(error);
    res.status(500).json({ message: "error al eliminar un producto"});
    }
};
//ok
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await Service.updateProduct(id, data);

    if (!updated) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.status(200).json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar producto" });
  }
};