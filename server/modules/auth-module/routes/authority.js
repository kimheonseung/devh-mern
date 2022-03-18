import express from 'express';
import { create, update, deleteByName, findAll, findByName } from '../controllers/authority.js';

const router = express.Router();

router.get('/list', findAll);
router.get('/name', findByName);
router.post('/create', create);
router.post('/update', update);
router.post('/delete', deleteByName);

export default router;