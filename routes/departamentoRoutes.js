import express from "express"
const router = express.Router();
import { guardarDepartamento, buscarDep } from '../controllers/departamentoController.js'

router.post("/save", guardarDepartamento);
router.get("/buscar", buscarDep);

export default router;