const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.gzoqizc.mongodb.net/?retryWrites=true&w=majority`,
        (error) => {
            if (error) {
                return console.log(
                    "Erro: ",
                    error
                )
            }
            return console.log("Conexão realizada com sucesso!")
        }
    )
}

module.exports = connectToDatabase