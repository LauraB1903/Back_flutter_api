import { Router } from "express";
import { actualizarProducto, agregarProducto, eliminarProducto, traerProducto, traerProductoPorId } from "../controllers/productos.controller.js";

const productoRouter=Router();

productoRouter.post('/productos',agregarProducto);
productoRouter.put('/productos/:id',actualizarProducto);
productoRouter.get('/productos',traerProducto);
productoRouter.get('/productos/:id',traerProductoPorId);
productoRouter.delete('/productos/:id',eliminarProducto);

export default productoRouter;