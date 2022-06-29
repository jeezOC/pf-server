import Usuario from '../models/Usuario.js'

const guardarEmpleado = async (req, res) => {
    const { empleado } = req.body;
    const empleadoExiste = await Usuario.findOne({ "usuario": empleado });
    if (!empleadoExiste) {
        try {
            const empleado = new Usuario(req.body);
            empleado.isAdmin = false;
            const empleadoGuardar = await empleado.save();
            res.status(200).json({ msg: "EMPLEADO REGISTRADO SATISFACTORIAMENTE", newEmpleado: empleadoGuardar});
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: error });
        }
    } else {
        res.status(400).json({ msg: "DEBE USAR OTRO NOMBRE DE EMPLEADO" });
    }
};

const eliminarEmpleado = async (req, res) => {
    const { empleado } = req.body;
    const empleadoExiste = await Usuario.findOne({ "usuario": empleado });
    if (!empleadoExiste) {
        try {
            const empleado = new Usuario(req.body);
            empleado.isAdmin = false;
            const empleadoGuardar = await empleado.save();
            res.status(200).json({ msg: "EMPLEADO REGISTRADO SATISFACTORIAMENTE", newEmpleado: empleadoGuardar});
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: error });
        }
    } else {
        res.status(400).json({ msg: "DEBE USAR OTRO NOMBRE DE EMPLEADO" });
    }
};

export {guardarEmpleado, eliminarEmpleado}