import {posts} from '../models/postModel.js';

export const getPostById = (req, res, next)=>{
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if(!post) {
    const error = new Error(`Post id ${id} is not found`);
    error.status = 404;
    return next(error);;
  }
  else {
    res.json(post);
  }
}

export const getPosts = (req, res, next)=> {
  res.json(posts);
}

export const createPost = (req, res, next)=>{
  console.log(req.body);
  const name = req.body.name;
  const id = posts.length + 1;
  posts.push({name: name, id: id});
  res.status(201).json(posts);
};

export const updatePost =  (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if(!post) {
    const error = new Error(`Post id ${id} is not found`);
    error.status = 404;
    return next(error);
  }
  else {
    post.name = req.body.name;
    res.status(200).json(posts);
  }
};

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if(!post) {
    const error = new Error(`Post id ${id} is not found`);
    error.status = 404;
    return next(error);
  }
  else {
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
  }
};