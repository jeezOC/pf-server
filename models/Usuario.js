import mongoose from "mongoose"
import bcrypt from "bcrypt"

const usuarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true
    },
    apellidos:{
        type: String,
        require: true,
        trim: true
    },
    usuario:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    contrasena:{
        type: String,
        require: true,
        trim: true
    },
    isAdmin:{
        type: Boolean,
        require: true
    },
    isNewAccount:{
        type: Boolean,
        require: true
    }
    // },
    // token:{
    //     type: String
    // }
});

usuarioSchema.pre("save", async function(next){
    
    if(!this.isModified("contrasena")){next();}
    const salt = await bcrypt.genSalt(10);
    this.contrasena = await bcrypt.hash(this.contrasena, salt);
});

usuarioSchema.methods.valdiatePassword = async function(contra){
    return await bcrypt.compare(contra, this.contrasena);
};

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;