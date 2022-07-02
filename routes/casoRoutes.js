import express from "express"
import { abiertosPorTramite, casosPorDepartamento } from '../controllers/casoController.js';
const router = express.Router();

router.post("/abiertos", abiertosPorTramite);
router.get("/casos-dep", casosPorDepartamento);

export default router;