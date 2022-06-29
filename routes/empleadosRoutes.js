import express from "express"
const router = express.Router();
import { guardarEmpleado, eliminarEmpleado, consultarEmpleados } from '../controllers/empleadoController.js'

router.post("/save", guardarEmpleado);
router.post("/delete", eliminarEmpleado);
router.post("/get", consultarEmpleados);


export default router;