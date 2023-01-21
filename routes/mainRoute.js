const express = require('express')
const router = express.Router();
const blogController=require('../controller/blogController')

router.post('/create-blog',blogController.createBlog)
router.get('/get-blog/:id',blogController.getBlog)
router.get('/get-all-blog',blogController.getAllBlog)
router.get('/get-all-blog-chunks/:skip',blogController.getBlogs)


module.exports = router
