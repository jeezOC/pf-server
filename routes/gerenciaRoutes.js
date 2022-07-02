import express from "express"
import { guardarGerencia, actualizarGerencia, eliminarGerencia, consultarGerencias,  } from '../controllers/gerenciaController.js';
const router = express.Router();

router.post("/save", guardarGerencia);
router.post("/delete", eliminarGerencia);
router.get("/getByOrg/:orgID", consultarGerencias);
// router.get("/getByID/:gerID", getGerencia);
router.patch('/updateById', actualizarGerencia);

export default router;