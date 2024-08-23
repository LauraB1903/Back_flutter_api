import { Router } from "express";
import { actualizarCategoria, crearCategoria, eliminarCategoria, traerCategoria, traerCategoriaPorId } from "../controllers/categorias.controller.js";

const categoriaRouter = Router();
categoriaRouter.post('/categorias',crearCategoria);
categoriaRouter.get('/categorias',traerCategoria);
categoriaRouter.get('/categorias/:id',traerCategoriaPorId);
categoriaRouter.delete('/categorias/:id',eliminarCategoria);
categoriaRouter.put('/categorias/:id',actualizarCategoria);

export default categoriaRouter;