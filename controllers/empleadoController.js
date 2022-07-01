import Usuario from '../models/Usuario.js'

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

export {eliminarEmpleado, consultarEmpleados, actualizarEmpleado}