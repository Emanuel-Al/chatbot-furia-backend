const mongoose = require('mongoose');

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
    } catch(err){
        console.log("Erro de conexão com o mongoDb: " , err);
        process.exit(1);
    }
};

module.exports = connectDb