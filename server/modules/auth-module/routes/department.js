import express from 'express';
import { create, update, deleteByName, findAll, findByName, findTree } from '../controllers/department.js';

const router = express.Router();

router.get('/tree', findTree);
router.get('/list', findAll);
router.get('/name', findByName);
router.post('/create', create);
router.post('/update', update);
router.post('/delete', deleteByName);

export default router;