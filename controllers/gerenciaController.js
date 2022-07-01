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

const actualizarGerencia = async (req, res) => {
    try {
        const { _id, nombre} = req.body
        const gerUpdated = await Gerencia.findByIdAndUpdate({'_id': _id},{'nombre':nombre})
        gerUpdated.save();
        res.status(200).json({ msg: "GERENCIA CREADA CORRECTAMENTE", gerUpdated:gerUpdated});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "GERENCIA NO SE CREO CORRECTAMENTE"});
    }
}


const eliminarGerencia = async (req, res) => {
    try {
        await Gerencia.deleteOne({'_id': req.body._id})

        res.status(200).json({ msg: "GERENCIA ELIMINADA CORRECTAMENTE"});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "SU GERENCIA NO SE ELIMINO CORRECTAMENTE"});
    }
}

const consultarGerencias = async (req, res) => {
    try {
        const  {orgID} = req.params;
        console.log(req.body);
        const gerencias = await Gerencia.find({'organizacion':  orgID});
        console.log(gerencias)
        res.status(200).json({ msg: "GERENCIA ELIMINADA CORRECTAMENTE", gerencias: gerencias});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "SU GERENCIA NO SE ELIMINO CORRECTAMENTE"});
    }
}

export {guardarGerencia, eliminarGerencia, consultarGerencias, actualizarGerencia}