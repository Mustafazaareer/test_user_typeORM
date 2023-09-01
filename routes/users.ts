import express from 'express';
import { User } from '../db/entity/User.js';
import dataSource from '../db/datasource.js';
const router = express.Router();
import createUser from '../controllers/userController.js'

router.post('/register', createUser);


export default router;
