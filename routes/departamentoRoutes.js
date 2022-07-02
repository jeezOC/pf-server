import express from "express"
const router = express.Router();

import { guardarDepartamento, getDepartamentos, buscarDep} from '../controllers/departamentoController.js'


router.post("/save", guardarDepartamento);
router.get("/getByOrg/:orgID", getDepartamentos);

router.post("/save", guardarDepartamento);
router.get("/buscar", buscarDep);


export default router;