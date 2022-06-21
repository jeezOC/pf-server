import mongoose from "mongoose"

const documentoSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    }
})

const Documento = mongoose.model("Documentos", documentoSchema);
export default Documento;