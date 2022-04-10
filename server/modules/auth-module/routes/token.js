import express from 'express';
import { refresh, silentRefresh } from '../controllers/token.js';
 

const router = express.Router();

router.post('/refresh', refresh);
router.post('/silent-refresh', silentRefresh);

export default router;