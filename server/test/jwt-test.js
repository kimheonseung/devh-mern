import jwt from "../modules/api/jwt.js";
import dotenv from 'dotenv';
dotenv.config();

let acctkn = jwt.createAccessToken('admin', ['at1'], ['dept1', 'dept2']);
let reftkn = jwt.createRefreshToken('admin', ['at1'], ['dept1', 'dept2']);

console.log("accessToken: " + acctkn);
console.log("refreshToken: " + reftkn);

const info = jwt.decode(reftkn);


console.log(info.username);
console.log(info.authorities);
console.log(info.departments);