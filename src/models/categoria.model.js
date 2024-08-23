import mongoose from "mongoose";
const categoriaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    }
})

export const Categoria = mongoose.model('Categoria',categoriaSchema)