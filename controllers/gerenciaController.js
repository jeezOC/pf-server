import Gerencia from '../models/Gerencia.js'
import mongoose from "mongoose"

const guardarGerencia = async (req, res) => {
    try {
        const { gerencia, org } = req.body
        const nuevaGer = new Gerencia({
            nombre: gerencia,
            organizacion: org._id
        })
        const gerGuardada = await nuevaGer.save();
        res.status(200).json({ msg: "GERENCIA CREADA CORRECTAMENTE", orgCreada:gerGuardada});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "GERENCIA NO SE CREO CORRECTAMENTE"});
    }
}

const eliminarGerencia = async (req, res) => {
    try {

        await Gerencia.deleteOne({'_id': new mongodb.ObjectID(req.body._id)})
        res.status(200).json({ msg: "GERENCIA ELIMINADA CORRECTAMENTE"});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "SU GERENCIA NO SE ELIMINO CORRECTAMENTE"});
    }
}

const consultarGerencias = async (req, res) => {
    try {
        const { org } = req.body;
        const gerencias = await Gerencia.findAll({'org': org});
        res.status(200).json({ msg: "GERENCIA ELIMINADA CORRECTAMENTE", gerencias: gerencias});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "SU GERENCIA NO SE ELIMINO CORRECTAMENTE"});
    }
}

export {guardarGerencia, eliminarGerencia, consultarGerencias}