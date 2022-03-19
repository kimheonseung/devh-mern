import express from 'express';
import { findAll, findByUsername, create, update, deleteByUsername, login } from '../controllers/user.js';

const router = express.Router();

router.post('/login', login);
router.get('/list', findAll);
router.get('/username', findByUsername);
router.post('/create', create);
router.post('/update', update);
router.post('/delete', deleteByUsername);

export default router;