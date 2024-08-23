import { Categoria } from "../models/categoria.model.js";
export const crearCategoria = async (req, res) => {
    try {
        const { nombre } = req.body;
        const newCategoria = new Categoria({
            nombre
        });
        const savedCategoria = await newCategoria.save();
        res.status(201).json(savedCategoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear categoría' });
    }
};


export const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    
    try {
        const actualizandoCategoria = await Categoria.findByIdAndUpdate(
            id,
            { nombre },
            { new: true }
        );

        if (!actualizandoCategoria) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.status(200).json(actualizandoCategoria);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoría' });
    }
};

export const eliminarCategoria= async (req,res)=>{
    const{id}=req.params;
    try {
        const eliminandoCategoria=await Categoria.findByIdAndDelete(id);
        if (!eliminandoCategoria) {
            return res.status(404).json({message:'La categoria no se pudo eliminar'})
        }
        res.status(200).json({message:'Categoria eliminada'})
    } catch (error) {
        res.status(500).json({message:'Error al eliminar la categoria'});
    }
}

export const traerCategoria= async (req,res) =>{
    
    try {
        const categoria=await Categoria.find();
        res.status(200).json(categoria)
    } catch (error) {
        res.status(500).json({message:'Error al traer las categorias'});
    }
}

export const traerCategoriaPorId=async(req,res)=>{
    const{id}=req.params;
    try {
        const categoria= await Categoria.findById(id);

        if(!categoria){
            return res.status(404).json({message:'No es posible encontrar la categoria' })
        }
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({message:'Error al traer la categoria por id'})
    }
}
