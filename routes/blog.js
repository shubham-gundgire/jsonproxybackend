const router = require('express').Router();

const {
  allPosts,
  singlePost,
  postComments,
} = require("../controllers/blog.js");

//fetch all posts
router.get('/posts', allPosts);

//fetch post accoeding to id
router.get('/posts/:id', singlePost);

//get all coments of post
router.get("/posts/:id/comments", postComments);

module.exports = router;