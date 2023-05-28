const bcrypt = require('bcrypt');

const saltRounds = 10;


async function encryptPassword(password) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

async function comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

module.exports = {
    encryptPassword,
    comparePassword
}