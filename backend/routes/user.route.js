import express from 'express';
import { test ,updateUser ,deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/veryfyUser.js';

const router = express.Router();

router.get('/test',test);

router.post('/update/:id',verifyToken,updateUser);

router.delete('/delete/:id',verifyToken,deleteUser);

export default router;