const { MongoClient } = require("mongodb")

const uri = 'mongodb+srv://vitaminb12:rG2CPeLbjSdUqrd6@level-up-game-marketpla.tjee4kg.mongodb.net/?retryWrites=true&w=majority'

const dbName = "items"
const collectionName = "item"


const client = new MongoClient(uri)

let database, collection


async function connect(){
    try{

        await client.connect(uri);
        database = client.db(dbName)
        collection = database.collection(collectionName)
        return client;

    }catch(error){

        console.log(error.message);
        return false;

    }
}


async function disconnect(){
    try{

        await client.close()
        console.log("DB disconnected")
        return true;

    }catch(err){

        console.log(err.message)
        return false;

    }
}

module.exports = {
  connect: connect,
  disconnect:disconnect
};



