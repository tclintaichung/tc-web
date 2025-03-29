// import { timeStamp } from 'console';
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      required: [true, 'Please enter name']
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    price: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

export const Product = mongoose.model('Product', ProductSchema);

