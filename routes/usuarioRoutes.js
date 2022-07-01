import express from "express"
import { authenticate, singin, registrarEmpleado, app,  } from '../controllers/usuarioController.js';
import authValidate from '../middleware/authMiddleware.js'

const router = express.Router();

// publicas(no ocupan haber iniciado sesion)
router.post("/login", authenticate);
router.post("/singin", singin);
//privadas(ocupa logearse)
router.get("/app", authValidate, app);
router.post("/usuario-save", authValidate, registrarEmpleado);

export default router;