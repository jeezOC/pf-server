import mongoose from "mongoose"


const dbConnect = async() => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB succesfully connected! on url= ${url}`);
        
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
}

export default dbConnect;