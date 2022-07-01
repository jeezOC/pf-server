import mongoose from "mongoose"

const gerenciaSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    organizacion:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Organizacion",
    }
})

const Gerencia = mongoose.model("Gerencias", gerenciaSchema);
export default Gerencia;