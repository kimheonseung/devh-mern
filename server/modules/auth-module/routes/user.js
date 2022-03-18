import express from 'express';
import { getUsers } from '../controllers/user.js';

const router = express.Router();

router.get('/list', getUsers);
// router.post('/create', createUser);

export default router;