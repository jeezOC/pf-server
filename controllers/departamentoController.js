import Departamento from '../models/Departamento.js';
import Organizacion from '../models/Organizacion.js';
import Usuario from '../models/Usuario.js'
import mongoose from "mongoose"

const guardarDepartamento = async (req, res) => {
    try {
        const { _id, idOrg, nombre, telP, telS, email } = req.body;
        const usuarioExiste = await Usuario.findOne({ "_id": _id });
        const orgExiste = await Organizacion.findOne({ "_id": idOrg });
        const nuevoDept = new Departamento({
            jefe_dept: mongoose.Types.ObjectId(usuarioExiste._id),
            organizacion: mongoose.Types.ObjectId(orgExiste._id),
            nombre: nombre,
            contacto: mongoose.Types.Array(telP, telS, email),
        })
        const deptGuardada = await nuevoDept.save();
        res.status(200).json({ msg: "DEPARTAMENTO CREADO CORRECTAMENTE", deptCreado:nuevoDept});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "EL DEPARTAMENTO NO SE CREO CORRECTAMENTE"});
    }
}

export {guardarDepartamento}