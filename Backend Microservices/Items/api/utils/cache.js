const Redis = require('redis');

const REDIS_PORT = process.env.PORT || 6379;
const EXPIRATION_TIME = 3600;

const redisClient = Redis.createClient(REDIS_PORT, 'localhost');
redisClient.connect();

async function read(key){
    const data = await redisClient.get(key);
    if (data) {
        return JSON.parse(data);
    }
    return null;
}

async function write(key, value){
    redisClient.setEx(key, EXPIRATION_TIME, JSON.stringify(value));
}

module.exports = {
    read,
    write
}
