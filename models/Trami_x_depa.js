import mongoose from "mongoose"

const departamentosSchema = mongoose.Schema({
    departamento:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Departamento",
    },
    tramite:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Tramite",
    },
    orden:{
        type: String,
        require: true,
        trim: true,
    },
    documentos:[{
        documento:{
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "Documento",
        },
        medio:{
            type: String,
            require: true,
            trim: true,
        },
        estado:{
            type: String,
            require: true,
            trim: true,
        },
    }]
})

const Departamento = mongoose.model("Departamentos", departamentosSchema);
export default Departamento;