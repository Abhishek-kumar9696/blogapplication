// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true, trim: true },
//   content: { type: String, required: true },
//   author: { type: String, required: true, trim: true },
//   user: {
//     type: mongoose.Schema.Types.ObjectId, // Reference to the User model
//     ref: 'User', // Name of the referenced model
//     required: true,
//   },
//   createdAt: { type: Date, default: Date.now },
// },timestamps=true);

// const Blog = mongoose.model('Blog', blogSchema);

// module.exports = Blog;

import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  author: { type: String,required: true, trim: true },
  image:{type:String,required:true},
  user: {
    type: mongoose.ObjectId, // Reference to the User model
    ref: 'User', // Name of the referenced model
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

const Blogs = mongoose.model('Blogs', blogSchema);

export default Blogs; // Use ES6 export syntax