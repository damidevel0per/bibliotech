import express from 'express';
import router from './routes/librosRoutes.js';
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';


dotenv.config();
const app = express();
//middleware
app.use(cors()); //permite solicitudes desde cualquier origen, útil para el desarrollo local
app.use(express.json()); //recibe cualquier obj json en el body de la petición y lo convierte en un objeto de JavaScript
app.use('/libros', router);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_DB_URI).then(() => {
console.log('Conectado a la base de datos MONGODB');
app.listen(PORT, () => {
  console.log(`Server levantado en http://localhost:${PORT}`);
});
}).catch((error) => {
    console.error('Error al conectar a la base de datos', error);
});



