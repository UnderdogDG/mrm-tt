const mongoose = require('mongoose');

const ipSchema = new mongoose.Schema(
    {
        chain: String,
        collection: [String]   
    }
)

const ipCollection = mongoose.model('IP', ipSchema);

async function saveCollection(chain, collection){

    const ipList = new ipCollection({chain, collection});

    const resp = await ipList.save();

    console.log(resp);
}

async function findCollection(chain){
    const collection = await ipCollection.find({ ip: chain })

    console.log(collection);
}