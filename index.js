import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import dbConnect from './config/db-connection.js';
import usuarioRoutes from './routes/usuarioRoutes.js'
import organizacionRoutes from './routes/organizacionRoutes.js'
import gerenciaRoutes from './routes/gerenciaRoutes.js'
import empleadosRoutes from './routes/empleadosRoutes.js'
import casoRoutes from './routes/casoRoutes.js'
import departamentoRoutes from './routes/departamentoRoutes.js'

const app = express();
const PORT = process.env.PORT || 4000 //cuando se pone en produccion utiliciza la que le asigne el host, localmente usa el puerto asignado
const alowedDomains = ["http://localhost:3000"];

dotenv.config();//inicializa las variables de entorno guardads en .env

const corsOptions= {
    origin: function(org, callback){
        if(alowedDomains.indexOf(org) !== -1){
            callback(null, true)
        }else{
            callback(new Error('CORS not allow this request'), true)
        }
    }
}

dbConnect();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', usuarioRoutes);
app.use('/org', organizacionRoutes);
app.use('/ger', gerenciaRoutes);
app.use('/emp', empleadosRoutes);
app.use('/caso', casoRoutes);
app.use('/dep', departamentoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
});