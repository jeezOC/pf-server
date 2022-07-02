import Departamento from '../models/Departamento.js';
import Organizacion from '../models/Organizacion.js';
import Usuario from '../models/Usuario.js'
import mongoose from "mongoose"

const guardarDepartamento = async (req, res) => {
    try {
        const { 
            nombre,
			contacto,
			gerencia,
			organizacion 
        } = req.body;
        const {tel_principal, tel_secundariod, email} = contacto

        // const usuarioExiste = await Usuario.findOne({ "_id": _id });
        const orgExiste = await Organizacion.findOne({ "_id": organizacion._id });
        const nuevoDept = new Departamento({
            nombre: nombre,
            // jefe_dept: mongoose.Types.ObjectId(usuarioExiste._id),
            organizacion: mongoose.Types.ObjectId(orgExiste._id),
            contacto: mongoose.Types.Array([tel_principal, tel_secundariod, email]),
            gerencia: mongoose.Types.ObjectId(gerencia._id),
        }
        )
        const deptCreado = await nuevoDept.save();
        res.status(200).json({ msg: "DEPARTAMENTO CREADO CORRECTAMENTE", deptCreado:deptCreado, gerencia:gerencia});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "EL DEPARTAMENTO NO SE CREO CORRECTAMENTE"});
    }
}

const buscarDep = async (req, res) => {
    const { id } = req.params;
    const dep = await Departamento.findById({'_id': id});
    res.status(200).json({dep:dep});
}

export {guardarDepartamento, buscarDep}