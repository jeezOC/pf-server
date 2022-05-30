
import Organizacions from '../models/Organizacion.js';
import Usuario from '../models/Usuario.js'

export const guardarOrganizacion = async (req, res) => {
    try {
        const { usuario, nombreOrg } = req.body;
        const usuarioExiste = await Usuario.findOne({ "usuario": usuario });
        const orgTemp = new Organizacions({
            nombre: nombreOrg,
            dueno: usuarioExiste._id,
        })
        const orgSaved = await orgTemp.save();
        res.status(200).json({ msg: "SU ORGANIZACION SE CREO CORRECTAMENTE", orgSaved: orgSaved});
    } catch (e) {
        res.status(400).json({ msg: "SU ORGANIZACION  NO SE CREO CORRECTAMENTE"});
    }

}
