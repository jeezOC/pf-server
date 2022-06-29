import mongoose from "mongoose"

const gerenciaSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    }
})

const Gerencia = mongoose.model("Gerencias", gerenciaSchema);
export default Gerencia;