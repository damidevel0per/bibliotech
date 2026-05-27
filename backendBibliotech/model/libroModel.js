import mongoose from 'mongoose';

//esquema del libro

const libroSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true,
      trim: true
    },
  
    autores: {
      type: [String],   // array de autores
      required: true
    },

    categorias: {
        type: [String],
        default: []
    },
  
    anioPublicacion: {
      type: Number,
      min: 1000,
      max: new Date().getFullYear()
    },
  
    paginas: {
      type: Number,
      min: 1
    },
  
    descripcion: {
      type: String
    },
  
    idioma: {
      type: String,
      default: "No especificado"
    },
  
    portada: {
      type: String   // URL de imagen
    },
  
    linkPdf: {
      type: String   // URL al PDF
    },
  
    formato: {
      type: String,
      default: "No especificado"
    },
  
    creadoEn: {
      type: Date,
      default: Date.now
    }
  });

  

const Libro = mongoose.model('Libro', libroSchema);

export default Libro;