import express from 'express';
import {getPosts, getPostById, createPost, updatePost, deletePost} from '../controllers/controlPost.js';

const router = express.Router();

// Get post
router.get('/', getPosts);
router.get('/:id', getPostById);
// Create post
router.post('/', createPost);
// Update Post
router.put('/:id', updatePost);
// Delete post
router.delete('/:id', deletePost);

export default router;