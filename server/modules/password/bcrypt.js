import bcrypt from 'bcrypt';
const saltRound = 10;

const encrypt = (text) => {
    return bcrypt.hashSync(text, saltRound);
}

const compare = (text, encodedText) => {
    return bcrypt.compareSync(text, encodedText);
}

export default {
    encrypt: encrypt,
    compare: compare
}