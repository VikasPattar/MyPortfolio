const express = require('express')
const router = express.Router()
const adminAuth = require('../middlewares/adminAuth')
const Blog = require('../models/blogsModel')


// POST |   /blogs/create
router.post('/create', adminAuth, async (req, res, next) => {

    // extract the data from req.body
    let { title, content, date, status } = req.body;

    // extract data from the authentication middleware
    let adminId = req.admin.id;
    if (!adminId) throw new Error("Admin Authentication error")

    try {
        let newBlog = await Blog.create({ admin: adminId, title, content, date, status });

        res.status(200).send({
            success: true,
            data: newBlog
        });
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

// GET |   /blogs/read
router.get('/read', adminAuth, async (req, res, next) => {
    try {
        let blogs = await Blog.find();
        if (!blogs) throw new Error("Can't fetch blogs data")
        res.status(200).send({
            success: true,
            data: blogs
        })
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

// POST |   /blogs/update
router.put('/update/:id', adminAuth, async (req, res, next) => {
    let { title, content, date, status } = req.body;
    let adminId = req.admin.id;
    let blogId = req.params.id; //blog id is sent by the frontend as a parameter in the url
    let update = {}             //empty object has declared to fill it later

    if (title) update.title = title;
    if (content) update.content = content;
    if (date) update.date = date;
    if (status) update.status = status;

    try {
        let updated = await Blog.findByIdAndUpdate(blogId,
            { $set: update },
            { new: true }
        )
        if (!updated) throw new Error("Updation error in the database")
        res.send({
            success: true,
            data: updated
        });
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

// POST |   /blogs/delete
router.delete('/delete/:id', adminAuth, async (req, res, next) => {
    let blogId = req.params.id;
    try {
        let deleted = await Blog.findByIdAndDelete(blogId);
        res.status(200).send({
            success: true,
            data: deleted
        })
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

module.exports = router