const { Schema, model } = require('mongoose');

const IpSchema = new Schema(
    {
        chain: {
            type: String,
            required: true
        },
        collection: {
            type: [String],
            required: true
        }
    }
)

const IpCollection = model('IpCollection', IpSchema);

model.exports = IpCollection;

async function saveCollection(chain, collection){

    const ipList = new ipCollection({chain, collection});

    const resp = await ipList.save();

    console.log(resp);
}

async function findCollection(chain){
    const collection = await ipCollection.find({ ip: chain })

    console.log(collection);
}