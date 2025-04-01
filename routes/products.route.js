import express from 'express';
import {
  getProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct} from '../controllers/product.controller.js';

const router = express.Router();

// Get post
router.get("/", getProducts);
router.get("/:id", getProductById);
// Create post
router.post("/", createProduct);
// Update Post
router.put("/:id", updateProduct);
// Delete post
router.delete("/:id", deleteProduct);

export default router;