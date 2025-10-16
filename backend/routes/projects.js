const express = require('express')
const router = express.Router()
const adminAuth = require('../middlewares/adminAuth')
const Project = require('../models/projectsModel')

// POST |   /projects/create
router.post('/create', adminAuth, async (req, res, next) => {
    let { title, description, image, techstack, status, repolink, demolink } = req.body;
    let adminId = req.admin.id;

    try {
        let newProject = await Project.create({ admin: adminId, title, description, image, techstack, status, repolink, demolink });
        res.status(200).send({
            success: true,
            data: newProject
        })
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

// POST |   /projects/read
router.get('/read', adminAuth, async (req, res, next) => {
    try {
        let projects = await Project.find();
        res.send({
            success: true,
            data: projects
        })
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

// POST |   /projects/update/:id
router.put('/update/:id', adminAuth, async (req, res, next) => {
    let { title, description, image, techstack, status, repolink, demolink } = req.body;
    let adminId = req.admin.id;
    let projId = req.params.id;
    let update = {}

    if (title) update.title = title;
    if (description) update.description = description;
    if (image) update.image = image;
    if (techstack) update.techstack = techstack;
    if (status) update.status = status;
    if (repolink) update.repolink = repolink;
    if (demolink) update.demolink = demolink;


    try {
        let updated = await Project.findByIdAndUpdate(projId,
            { $set: update },
            { new: true }
        )
        if (!updated) res.send({ err: "project not found" })
        res.send({
            success: true,
            data: updated
        });
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

// POST |   /projects/delete/:id
router.delete('/delete/:id', adminAuth, async (req, res, next) => {
    let projId = req.params.id;
    try {
        let deleted = await Project.findByIdAndDelete(projId);
        if (!deleted) throw new Error("project not found")
        res.send({
            success: true,
            data: deleted
        })
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

module.exports = router