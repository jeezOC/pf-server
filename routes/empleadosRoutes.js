import express from "express"
const router = express.Router();
import { guardarEmpleado } from '../controllers/empleadoController.js'

router.post("/save", guardarEmpleado);

export default router;