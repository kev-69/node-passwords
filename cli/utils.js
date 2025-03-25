const bcrypt = require("bcrypt")
const argon2 = require("argon2")

const colorette = require("colorette");

const argonOptions = {
    type: argon2.argon2id,
    memoryCost: 65536,
    timeCost: 3,
    parallelism: 2,
    hashLength: 64
};

async function hashBcrytp(password, algorithm) {
    const saltRounds = 12;
    console.time("\nbcrypt-hash"); // start timer
    const hashed = await bcrypt.hash(password, saltRounds);
    console.timeEnd("\nbcrypt-hash"); // end timer
    return hashed;
}

async function hashArgon(password, algorithm) {
    console.time("\nargon2-hash"); // Start timer
    const hashed = await argon2.hash(password, argonOptions);
    console.timeEnd("\nargon2-hash"); // End timer
    return hashed;
}

async function verifyBcrypt (password, hash) {
    console.time("\nbcrypt-verify"); // Start timer
    const isBcryptValid = await bcrypt.compare(password, hash);
    console.timeEnd("\nbcrypt-verify"); // End timer
    return isBcryptValid;
}

async function verifyArgon(password, hash) {
    console.time("\nargon2-verify"); // Start timer
    const isArgonValid = await argon2.verify(password, hash);
    console.timeEnd("\nargon2-verify"); // End timer
    return isArgonValid;
}

module.exports = {
    hashBcrytp,
    hashArgon,
    verifyBcrypt,
    verifyArgon,
};