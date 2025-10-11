const express = require('express')
const router = express.Router()
const adminAuth = require('../middlewares/adminAuth')
const Blog = require('../models/blogsModel')


// POST |   /blogs/create
router.post('/create', adminAuth, async (req, res)=>{
    let {title, content, date, status} = req.body;
    let adminId = req.admin.id;

     try {
        let newBlog = await Blog.create({admin : adminId, title, content, date, status});
        res.send({newBlog});
    } catch (error) {
        res.send({error: error.message})
    }
})

// GET |   /blogs/read
router.get('/read', adminAuth ,async (req, res)=>{
    try {
        let blogs = await Blog.find();
        res.send({blogs})
    } catch (error) {
        res.send({error : "unable to fetch blogs"})
    }
})

// POST |   /blogs/update
router.put('/update/:id', adminAuth , async (req, res)=>{
    let { title, content, date, status} = req.body;
    let adminId = req.admin.id;
    let blogId = req.params.id;
    let update = {}

    if(title) update.title = title;

    try {
        let updated = await Blog.findByIdAndUpdate(blogId,
            {$set : update},
            {new : true}
        )
        if(!updated) res.send({err : 'note not found'})
        res.send({updated});
    } catch (error) {
        res.send({error : "unable update blogs"})
    }
})

// POST |   /blogs/delete
router.delete('/delete/:id', adminAuth ,async (req, res)=>{
    let blogId = req.params.id;
    try {
        let deleted = await Blog.findByIdAndDelete(blogId);
        if(!deleted) res.send({err : "note not found"})
        res.send({deleted})
    } catch (error) {
        res.send({error : "error in deleting blog"})
    }
})

module.exports = router