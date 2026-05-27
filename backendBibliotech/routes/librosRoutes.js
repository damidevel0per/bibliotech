import express from 'express';
import Libro from '../model/libroModel.js';

const router = express.Router();

// obtengo todos los libros
router.get('/', async (req, res) => {

    try {
        const libros = await Libro.find(); // find vacio para que traiga todos los libros
        res.status(200).json(libros);
        console.log('obteniendo todos los libros');

    } catch (error) {
        console.error('Error al obtener los libros', error);
    }
})

// obtengo libro por id
router.get('/:id', (req, res) => {
 console.log('GET LIBRO POR ID');
})

// creando libro 
router.post('/', async (req, res) => {

    try {
        const { nombre, autores, categorias, anioPublicacion, paginas, descripcion, idioma, portada, linkPdf, formato } = req.body;
        const newLibro = new Libro({nombre, autores, categorias, anioPublicacion, paginas, descripcion, idioma, portada, linkPdf, formato});
        console.log(newLibro);

        const savedLibro = await newLibro.save();
        res.status(201).json({mensaje : 'Libro guardado exitosamente', libro: savedLibro});
        console.log('CREANDO UN LIBRO');
    } 
    catch (error) {   
     console.error('Error al crear el libro', error);
    }

})

// ELIMINANDO libro 
router.delete('/:id', (req, res) => {
    console.log('ELIMINANDO UN LIBRO');
})

export default router;