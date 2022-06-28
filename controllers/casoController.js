import Caso from '../models/Caso.js'

const abiertosPorTramite = async (req, res) => {
    const { tramite } = req.body;
    const casos = await Caso.find({ "tramite": tramite });
    res.status(200).json({ msg: "CASOS ENCONTRADOS", casos: casos});
};

export {abiertosPorTramite}