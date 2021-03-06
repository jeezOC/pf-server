import Caso from '../models/Caso.js'

const crearTramite = async (req, res) => {
    const { tramite } = req.body;
    const casos = await Caso.find({ "tramite": tramite });
    res.status(200).json({ msg: "CASOS ENCONTRADOS", casos: casos});
};

const abiertosPorTramite = async (req, res) => {
    const { tramite } = req.body;
    const casos = await Caso.find({ "tramite": tramite });
    res.status(200).json({ msg: "CASOS ENCONTRADOS", casos: casos});
};

const abiertosPorCodigo = async (req, res) => {
    const { codigo } = req.body;
    const caso = await Caso.findOne({ "codigo": codigo });
    res.status(200).json({ msg: "CASOS ENCONTRADOS", caso: caso});
};

const casosPorDepartamento = async (req, res) => {
    const casos = await caso_x_Depa.find();
    res.status(200).json({ casos });
}

const buscarCaso = async (req, res) => {
    const { _id } = req.body;
    const caso = await Caso.findById({'_id': _id});
    res.status(200).json({caso:caso});
}

export {abiertosPorTramite, abiertosPorCodigo, casosPorDepartamento, buscarCaso}