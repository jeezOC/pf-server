import mongoose from "mongoose"

const tramiteSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    }
})

const Tramite = mongoose.model("Tramites", tramiteSchema);
export default Tramite;