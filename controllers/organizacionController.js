
import Organizacion from '../models/Organizacion.js';
import Usuario from '../models/Usuario.js'
import mongoose from "mongoose"

const guardarOrganizacion = async (req, res) => {
    try {
        const { _id, nombre } = req.body;
        const usuarioExiste = await Usuario.findOne({ "_id": _id });
        const nuevaOrg = new Organizacion({
            nombre: nombre,
            dueno: mongoose.Types.ObjectId(usuarioExiste._id),
        })
        const orgGuardada = await nuevaOrg.save();
        await Usuario.findByIdAndUpdate({"_id": _id},{"isNewAccount": false})
        res.status(200).json({ msg: "SU ORGANIZACION SE CREO CORRECTAMENTE", orgCreada:orgGuardada});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "SU ORGANIZACION  NO SE CREO CORRECTAMENTE"});
    }
}

export {guardarOrganizacion}