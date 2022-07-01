import Usuario from '../models/Usuario.js'

const guardarEmpleado = async (req, res) => {
    const { usuario } = req.body;
    const usuarioExiste = await Usuario.findOne({ "usuario": usuario });
    if (!usuarioExiste) {
        try {
            const usuario = new Usuario(req.body);
            usuario.isAdmin = false;
            usuario.isNewAccount = true;
            const usuarioGuardar = await usuario.save();
            res.status(200).json({ msg: "EMPLEADO REGISTRADO SATISFACTORIAMENTE", newUser: usuarioGuardar});
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: error });
        }
    } else {
        res.status(400).json({ msg: "EL NOMBRE DE EMPLEADO YA EXISTE" });
    }
};

const eliminarEmpleado = async (req, res) => {
    try {
        await Usuario.deleteOne(req.body.usuario)
        res.status(200).json({ msg: "EMPLEADO ELIMINADO CORRECTAMENTE"});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "EL EMPLEADO NO SE ELIMINO CORRECTAMENTE"});
    }
}

const actualizarEmpleado = async (req, res) => {
    try {
        const user = req.Usuario
        const usuario = await Usuario.updateOne({usuario: user})
        res.status(200).json({ msg: "EMPLEADO ACTUALIZADO CORRECTAMENTE"});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "EL EMPLEADO NO SE ACTUALIZO CORRECTAMENTE"});
    }
}

const consultarEmpleados = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json({ msg: "BUSQUEDA CORRECTAMENTE", usuarios: usuarios});
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "BUSQUEDA NO HECHA"});
    }
}

export {guardarEmpleado, eliminarEmpleado, consultarEmpleados, actualizarEmpleado}