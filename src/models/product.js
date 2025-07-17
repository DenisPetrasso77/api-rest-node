const products = [
    {
        id: 1,
        name: "Camiseta Deportiva",
        price: 150,
        categories: ["ropa","deportes"], 
    },
    {
        id: 2,
        name: "Ropa Gym",
        price: 100,
        categories: ["Ropa","deportes"], 
    },
    {
        id: 3,
        name: "Mochila Escolar",
        price: 350,
        categories: ["mochila","escolar"], 
    },
    {
        id: 4,
        name: "Auriculares Bluetooth",
        price: 800,
        categories: ["tecnologia","audio"], 
    },
    {
        id: 5,
        name: "Botella Térmica",
        price: 220,
        categories: ["hogar","accesorios"], 
    },
];

export const getAllProducts = () => {
    return products;
}

export const getProductsById = () => {
    return products.find((item) => item.id == id);
}