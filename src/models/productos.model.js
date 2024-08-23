import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Categoria'
    }
});

export const Productos = mongoose.model('Productos', productosSchema);
