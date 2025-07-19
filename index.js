import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

//middleware global de body-parser para interpretar los body en formato JSON de las peticiones.
app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.json("Bienvenido a nuestra API REST !!!!")
});

import productsRouter from './src/routes/products.router.js';
app.use('/api', productsRouter);

import authRouter from './src/routes/auth.router.js';
app.use("/api/auth", authRouter);


import notFound from "./src/middlewares/not-found.js";
app.use(notFound);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));