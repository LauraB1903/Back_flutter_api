import { Productos } from "../models/productos.model.js";

export const agregarProducto = async (req, res) => {
    const { codigo, nombre, precio, categoria } = req.body;
    try {
        const newProducto = new Productos({
            codigo,
            nombre,
            precio,
            categoria
        });
        const savedProducto = await newProducto.save();
        res.status(201).json(savedProducto);
    } catch (error) {
        console.error("Error al agregar producto:", error);
        res.status(500).json({ message: 'Error al agregar producto' });
    }
};


export const actualizarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const { codigo, nombre, precio, categoria } = req.body;

        const actualizandoProducto = await Productos.findByIdAndUpdate(
            id,
            { codigo, nombre, precio, categoria },
            { new: true }
        );
        if (!actualizandoProducto) {
            return res.status(404).json({ message: 'No es posible encontrar el producto' });
        }
        res.status(200).json(actualizandoProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
};


export const eliminarProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const eliminandoProducto = await Productos.findByIdAndDelete(id);

        if (!eliminandoProducto) {
            return res.status(404).json({ message: 'El producto no se pudo eliminar' });
        }
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
};


export const traerProducto = async (req, res) => {
    try {
        const productos = await Productos.find().populate('categoria');
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al traer los productos' });
    }
};


export const traerProductoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Productos.findById(id).populate('categoria');
        if (!producto) {
            return res.status(404).json({ message: 'No se puede traer el producto por ID' });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al traer el producto por ID' });
    }
};
