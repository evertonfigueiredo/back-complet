import mongoose from "mongoose"

const connect= async () => {
    try {
        mongoose.set("strictQuery", true)
        mongoose.connect(process.env.MONGO_URI).then(
            response => {
                console.log("Banco Conectado");
            }
        )
    } catch (error) {
        console.log("Erro: ", error.message);
    }
}

export default {connect}