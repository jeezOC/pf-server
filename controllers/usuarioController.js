import Usuario from '../models/Usuario.js'
import Organizacion from '../models/Organizacion.js'
import generateJWT from '../helpers/jwt.js'

import mongoose from "mongoose"

import Departamento from '../models/Departamento.js';


const authenticate = async (req, res) => {

    const { usuario, contrasena } = req.body;

    const usuarioExiste = await Usuario.findOne({ usuario });
    console.log(usuarioExiste);
    if (usuarioExiste) {
        if (await usuarioExiste.valdiatePassword(contrasena)) {
            const userLoged = {
                _id: usuarioExiste._id,
                nombre: usuarioExiste.nombre,
                apellidos: usuarioExiste.apellidos,
                usuario: usuarioExiste.usuario,
                isAdmin: usuarioExiste.isAdmin,
                isNewAccount: usuarioExiste.isNewAccount
            }
            if (!userLoged.isNewAccount) {
                if (userLoged.isAdmin) {
                    
                    const organizacion = await Organizacion.findOne({ 'dueno':userLoged._id });
                    res.status(200).json({ token: generateJWT(usuarioExiste._id), user: userLoged, msg: "USUARIO INGRESO SATISFACTORIAMENTE", org: organizacion })
                } else {
                    res.status(200).json({ token: generateJWT(usuarioExiste._id), user: userLoged, msg: "USUARIO INGRESO SATISFACTORIAMENTE" })
                }
            } else {
                res.status(200).json({ token: generateJWT(usuarioExiste._id), user: userLoged, msg: "USUARIO INGRESO SATISFACTORIAMENTE" })
            }
        } else {
            res.status(400).json({ msg: "CONTRASENA INCORRECTA" });
        }
    } else {
        res.status(404).json({ msg: "EL NOMBRE DE USUARIO INGRESADO NO EXISTE" });
    }
};

const singin = async (req, res) => {
    const { usuario } = req.body;
    const usuarioExiste = await Usuario.findOne({ "usuario": usuario });
    if (!usuarioExiste) {
        try {
            const usuario = new Usuario(req.body);

            const usuarioGuardar = await usuario.save();
            res.status(200).json({ msg: "USUARIO REGISTRADO SATISFACTORIAMENTE", newUser: usuarioGuardar });
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: error });
        }
    } else {
        res.status(400).json({ msg: "EL NOMBRE DE USUARIO YA EXISTE" });
    }
};

const registrarEmpleado = async (req, res) => {
    const { usuario } = req.body;
    const usuarioExiste = await Usuario.findOne({ "usuario": usuario });
    if (!usuarioExiste) {
        try {
            const usuario = new Usuario(req.body);

            const usuarioGuardado = await usuario.save();
            
            const { departamento } = req.body;
            const depExiste = await Departamento.findOne({ "nombre": departamento});

            if (depExiste) {
                const dep = await Departamento.findByIdAndUpdate({'_id': depExiste.id},{empleados:[...depExiste.empleados,usuarioGuardado]})
            }

            res.status(200).json({ msg: "EMPLEADO REGISTRADO SATISFACTORIAMENTE", newUser: usuarioGuardado});
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: error });
        }
    } else {
        res.status(400).json({ msg: "EL NOMBRE DE EMPLEADO YA EXISTE" });
    }
};

const app = (req, res) => {
    const { usuarioActual, token } = req;
    // console.log({usuario: usuarioActual});
    res.status(200).json({ usuarioActual });
};
export { authenticate, singin, app, registrarEmpleado };

