const mongoose = require('mongoose');

const dbConnection = async ()=> {
    try{
        await mongoose.connect("mongodb+srv://admin:AKnJey5YJU0iQQOb@mrm-tt.ljjmpjk.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB Connected");
    }
    catch(e){
        console.log("DB Fail: ". e.message);
    }
}

dbConnection();