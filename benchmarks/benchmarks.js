const bcrypt = require("bcrypt");
const argon2 = require("argon2");

const password = "SecuredP@sword123!";

async function benchmark() {
    const saltRounds = 12;
    const argonOptions = {
        type: argon2.argon2id,
        memoryCost: 65536, 
        timeCost: 3,
        parallelism: 4, 
        hashLength: 64
    }

    console.time("bcrypt-hash");
    const bcryptHash = await bcrypt.hash(password, saltRounds);
    console.timeEnd("bcrypt-hash");

    console.time("argon2-hash");
    const argonHash = await argon2.hash(password, argonOptions);
    console.timeEnd("argon2-hash");

    console.time("bcrypt-verify");
    await bcrypt.compare(password, bcryptHash);
    console.timeEnd("bcrypt-verify");

    console.time("argon2-verify");
    await argon2.verify(argonHash, password);
    console.timeEnd("argon2-verify");
}

benchmark();