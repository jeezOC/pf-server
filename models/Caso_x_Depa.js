import mongoose from "mongoose"

const caso_x_DepaSchema = mongoose.Schema({
    departamento:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Documento",
    },
    caso:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Caso",
    },
    fecha_ingreso:{
        type: Date,
        require: true,
    },
    fecha_salida:{
        type: Date,
        require: true,
    },
    estado:{
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

const caso_x_Depa = mongoose.model("casos_x_Depas", caso_x_DepaSchema);
export default caso_x_Depa;