import express from 'express';
import { refresh } from '../controllers/token.js';
 

const router = express.Router();

router.post('/refresh', refresh);

export default router;