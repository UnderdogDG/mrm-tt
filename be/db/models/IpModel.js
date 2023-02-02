const mongoose = require("mongoose");

const ipSchema = new mongoose.Schema(
    {
        ip: {
            type: String,
            required: true
        },
        group: {
            type: Array,
            required: true
        }
    }
)

const IpCollection = mongoose.model('IpCollection', ipSchema);

module.exports = IpCollection;

/* async function saveCollection(chain, collection){

    const ipList = new ipCollection({chain, collection});

    const resp = await ipList.save();

    console.log(resp);
}

async function findCollection(chain){
    const collection = await ipCollection.find({ ip: chain })

    console.log(collection);
} */