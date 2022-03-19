import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import userRoutes from './modules/auth-module/routes/user.js';
import tokenRoutes from './modules/auth-module/routes/token.js';
import authorityRoutes from './modules/auth-module/routes/authority.js';
import departmentRoutes from './modules/auth-module/routes/department.js';
import dotenv from 'dotenv';
import { validateAccessToken } from './modules/api/middleware/token.js';

dotenv.config();

const MONGODB_URL = `mongodb+srv://
${process.env.MONGO_USER}:${process.env.MONGO_PW}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}
?retryWrites=true&w=majority`;

const app = express();

const bodyParserOption = {
    limit: "20mb",
    extended: true
}

app.use(express.json(bodyParserOption));
app.use(express.urlencoded(bodyParserOption));
app.use(cors());

app.use('/user', userRoutes);
app.use('/token', tokenRoutes);
app.use('/authority', /*validateAccessToken, */authorityRoutes);
app.use('/department', /*validateAccessToken, */departmentRoutes);

mongoose.connect(MONGODB_URL, {
    useNewUrlPArser: true,
    useUnifiedTopology: true
}).then(
    () => app.listen(
        process.env.SERVER_PORT, () => console.log('Success to open ! ' + process.env.SERVER_PORT)
    )
).catch(
    err => console.log(err.message)
)
