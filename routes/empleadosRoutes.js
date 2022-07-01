import express from "express"
const router = express.Router();
import { eliminarEmpleado, actualizarEmpleado } from '../controllers/empleadoController.js'

router.post("/update", actualizarEmpleado);
router.post("/delete", eliminarEmpleado);
//router.post("/get", consultarEmpleados);


export default router;