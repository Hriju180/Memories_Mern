import express from 'express';
import {createPosts, getPosts}  from '../controller/userController.js';

const router=express.Router();

router.get('/get',getPosts);
router.post('/create',createPosts);

export default router;