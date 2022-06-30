import express from "express"
const router = express.Router();
import { guardarEmpleado, eliminarEmpleado, actualizarEmpleado } from '../controllers/empleadoController.js'

router.post("/save", guardarEmpleado);
router.post("/update", actualizarEmpleado);
router.post("/delete", eliminarEmpleado);
//router.post("/get", consultarEmpleados);


export default router;