import { Router } from "express";
import { createUsuarios, eliminarUsuariosId, traerUsuarios, traerUsuariosId, actualizarUsuarios } from "../controllers/usuarios.controller.js";

const usuarioRouter = Router();

usuarioRouter.post('/usuarios', createUsuarios);
usuarioRouter.put('/usuarios/:id', actualizarUsuarios); 
usuarioRouter.get('/usuarios', traerUsuarios);
usuarioRouter.delete('/usuarios/:id', eliminarUsuariosId);
usuarioRouter.get('/usuarios/:id', traerUsuariosId);

export default usuarioRouter;
