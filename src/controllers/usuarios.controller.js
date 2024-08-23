import { Usuarios } from "../models/usuarios.model.js";
import bcrypt from "bcrypt";

export const createUsuarios=async(req,res)=>{
    const{ nombre, correo, contraseña}= req.body;
    try {
        const existeUsuario = await Usuarios.findOne({correo});
        if (existeUsuario) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        } 
        const hashedContraseña = await bcrypt.hash(contraseña, 8);
        const newUsuarios= new Usuarios({
            nombre,correo,contraseña: hashedContraseña
        });
        await newUsuarios.save();
        res.status(201).json({message:'Usuario creado con exito',Usuarios:newUsuarios})
    } catch (error) {
        res.status(500).json({message:'Error al crear usuario',error:error.message})
        
    }
};

export const actualizarUsuarios=async (req,res)=>{
    const{ nombre, correo, contraseña}= req.body;
    try {
        const existeUsuario = await Usuarios.findOne({correo});
        if (!existeUsuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        existeUsuario.nombre=nombre
        existeUsuario.correo=correo
        existeUsuario.contraseña=contraseña

        await existeUsuario.save();

        res.status(200).json({message:'Usuario actualizado',Usuarios:existeUsuario})
        
    } catch (error) {
        console.error('Error al actualizar el usuario',error);
        res.status(500).json({message:'Error al actualizar el usuario'});
    }
    
}

export const traerUsuarios = async(req, res)=>{
    try {
        const data = await Usuarios.find({})
        res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const traerUsuariosId = async(req, res)=>{
    const {id} = req.params;
    try {
        const data = await Usuarios.findById(id)
        if(!data){
            return res.status(404).json({message:"Usuario no encontrado"})
        }
        res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const eliminarUsuariosId = async(req, res)=>{
    const {id} = req.params;
    try {
        const data = await Usuarios.deleteOne({_id:id});
        if(data.deletedCount === 0){
            return res.status(404).json({message:"Usuario no encontrado"})
        }
        res.status(200).json({message: "Usuario eliminado con existo", data})  
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}