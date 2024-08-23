import mongoose from "mongoose";
const usuarioSchema=mongoose.Schema({
    nombre:{
        type:String,
        require: true
    },
    correo:{
        type: String,
        require:true,
        unique:true
    },
    contraseña:{
        type: String,
        require:true
    }
})

export const Usuarios=mongoose.model("Usuario",usuarioSchema);