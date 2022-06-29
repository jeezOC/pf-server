import express from "express"
import { abiertosPorTramite } from '../controllers/usuarioController.js';
const router = express.Router();


router.post("/abiertos", abiertosPorTramite);


export default router;