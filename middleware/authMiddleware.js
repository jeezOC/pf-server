import jwt from "jsonwebtoken"
import Usuario from '../models/Usuario.js'

const authValidate = async (req, res, next) => {
    let token;
    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')) {
        // res.json({ msg: "token valido" });
        
        try {
            token = req.headers.authorization.split(" ")[1];
            

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
           
            req.usuarioActual = await Usuario.findById(decoded.id).select("-contrasena");
            req.token = token
            return next();
        } catch (error) {

            const e = new Error("Ocurrio un error verificando el token");
            return res.status(403).json({ msg: e.message });
        }
    } else if(!token){
        const e = new Error("token inexistente");
        res.status(403).json({ msg: e.message });
    }
    next();
}

export default authValidate;