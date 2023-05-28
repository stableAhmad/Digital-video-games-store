const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://savoura:pUwwEwZUKQTVgYzf@level-up-game-marketpla.tjee4kg.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'users';
const collectionName = 'user';

// Create a new instance of MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB database
async function connect() {
  try {
    await client.connect();
    console.log("Connected to the database");
    return client;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

// Disconnect from the MongoDB database
async function disconnect() {
  try {
    await client.close();
    console.log('Disconnected from the database');
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
}

// Export the connect and disconnect functions
module.exports = {
  connect,
  disconnect,
};
