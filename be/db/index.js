require('dotenv').config();

const mongoose = require('mongoose');

const dbConnection = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected...");
    }
    catch(e){
        console.log("DB Fail: ". e.message);
    }
}

dbConnection();