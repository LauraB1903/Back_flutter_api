import express from "express";
import mongoose from "mongoose";
import usuarioRouter from "./routes/usuarios.route.js"; 
import cors from 'cors';
import dotenv from 'dotenv';
import categoriaRouter from "./routes/categorias.route.js";
import productoRouter from "./routes/productos.route.js";

dotenv.config();
const app = express();

 app.use(cors({ origin: '*', credentials: true }))
const port = process.env.PORT || 8001; 

app.use(express.json());

app.use("/api", usuarioRouter);
app.use("/api", categoriaRouter);
app.use("/api", productoRouter);




app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));
