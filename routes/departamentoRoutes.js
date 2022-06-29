import express from "express"
const router = express.Router();
import { guardarDepartamento } from '../controllers/departamentoController.js'

router.post("/save", guardarDepartamento);

export default router;