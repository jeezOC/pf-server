import express from "express"
const router = express.Router();
import { guardarDepartamento, getDepartamentos} from '../controllers/departamentoController.js'

router.post("/save", guardarDepartamento);
router.get("/getByOrg/:orgID", getDepartamentos);
export default router;