import {Product} from '../models/product.model.js';

export const getProductById = async (req, res)=>{
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

export const updateProduct =  async (req, res)=>{
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({message: "Product is not found"});
    }
    const updateProducts = await Product.find({});
    res.status(200).json(updateProducts);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

export const deleteProduct = async (req, res)=>{
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({message: "Product is not found"});
    }
    res.status(200).json({message: 'delete successfully'});
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

