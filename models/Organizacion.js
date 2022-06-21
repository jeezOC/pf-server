import mongoose from "mongoose"

const organizacionsSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    dueno:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Usuario",
    },
})

const Organizacion = mongoose.model("Organizacion", organizacionsSchema);
export default Organizacion;