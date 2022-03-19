import aes256 from '../modules/password/aes256.js';
import bcrypt from '../modules/password/bcrypt.js';
import dotenv from 'dotenv';

dotenv.config();


const pw = 'hskim';

let encoded = aes256.encrypt(pw);

console.log(encoded);

let decoded = aes256.decrypt(encoded);

console.log(decoded);

let bcryptEncoded = bcrypt.encrypt(pw);

console.log(bcryptEncoded);


// let bool = bcrypt.compare(pw, '$2b$10$y6ZwCMediRHSNi3x4B1fLub.7uqvhMDBG/LfHiWSphqkArxYAiB8i');
// console.log(bool);