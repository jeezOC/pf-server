import mongoose from "mongoose"

const casoSchema = mongoose.Schema({
    tramite:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Tramite",
    },
    codigo:{
        type: String,
        require: true
    },
    fecha_creacion:{
        type: Date,
        require: true,
    },
    fecha_final:{
        type: Date,
        require: true,
    }    
})

const Caso = mongoose.model("Casos", casoSchema);
export default Caso;