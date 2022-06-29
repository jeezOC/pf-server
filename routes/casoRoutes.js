import express from "express"
import { abiertosPorTramite } from '../controllers/casoController.js';
const router = express.Router();

router.post("/abiertos", abiertosPorTramite);

export default router;