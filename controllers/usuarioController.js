import Usuario from '../models/Usuario.js'
import generateJWT from '../helpers/jwt.js'

const authenticate = async (req, res) => {

    const { usuario, contrasena } = req.body;

    const usuarioExiste = await Usuario.findOne({ usuario });
    if (usuarioExiste) {
        if (await usuarioExiste.valdiatePassword(contrasena)) {
         
            res.json({ token: generateJWT(usuarioExiste.id) })
            // res.json({ msg: "USUARIO INGRESO SATISFACTORIAMENTE" });
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
            res.json({ msg: "USUARIO REGISTRADO SATISFACTORIAMENTE" });
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json({ msg: "EL NOMBRE DE USUARIO YA EXISTE" });
    }
};
const app = (req, res) => {
    const { usuarioActual } = req;
    // console.log({usuario: usuarioActual});
    res.json(usuarioActual);

};
export { authenticate, singin, app };

