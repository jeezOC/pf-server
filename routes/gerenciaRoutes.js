import express from "express"
import { guardarGerencia, eliminarGerencia, consultarGerencias } from '../controllers/gerenciaController.js';
const router = express.Router();

router.post("/save", guardarGerencia );
router.post("/delete", eliminarGerencia );
router.post("/get", consultarGerencias );

export default router;