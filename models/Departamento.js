import mongoose from "mongoose"

const departamentosSchema = mongoose.Schema({
    jefe_dept:{
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: "Usuario",
    },
    organizacion:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Organizacion",
    },
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    contacto:[{
        tel_principal:{
            type: String,
            require: true,
            trim: true,
        },
        tel_secundario:{
            type: String,
            require: false,
            trim: true,
        },
        email:{
            type: String,
            require: true,
            trim: true,
        },
    }],
    empleados:[{
        usuario:{
            type: String,
            require: false,
            ref: "Usuario",
        }
    }],
    gerencia:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Gerencia" 
    }
})

const Departamento = mongoose.model("Departamentos", departamentosSchema);
export default Departamento;