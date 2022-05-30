import express from "express"
import { authenticate, singin, app } from '../controllers/usuarioController.js';
import authValidate from '../middleware/authMiddleware.js'
import { guardarOrganizacion } from '../controllers/organizacionController.js'
const router = express.Router();

router.post("/save", guardarOrganizacion);


export default router;