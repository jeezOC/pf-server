import Gerencia from '../models/Gerencia.js'
import mongoose from "mongoose"

const guardarGerencia = async (req, res) => {
    try {
        const { nombre } = req.body;
        const nuevaGer = new Gerencia({
            nombre: nombre,
        })
        const gerGuardada = await nuevaOrg.save();
        res.status(200).json({ msg: "GERENCIA CREADA CORRECTAMENTE", orgCreada:nuevaGer});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "GERENCIA NO SE CREO CORRECTAMENTE"});
    }
}

const eliminarGerencia = async (req, res) => {
    try {
        await Gerencia.deleteOne(req.body.nombre)
        res.status(200).json({ msg: "GERENCIA ELIMINADA CORRECTAMENTE"});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "SU GERENCIA NO SE ELIMINO CORRECTAMENTE"});
    }
}

const consultarGerencias = async (req, res) => {
    try {
        const gerencias = await Gerencia.find();
        res.status(200).json({ msg: "GERENCIA ELIMINADA CORRECTAMENTE", gerencias: gerencias});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "SU GERENCIA NO SE ELIMINO CORRECTAMENTE"});
    }
}

export {guardarGerencia, eliminarGerencia, consultarGerencias}