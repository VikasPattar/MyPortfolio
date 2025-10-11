const express = require('express')
const router = express.Router()
const adminAuth = require('../middlewares/adminAuth')
const Project = require('../models/projectsModel')

// POST |   /projects/create
router.post('/create', adminAuth ,async (req, res)=>{
    let { title, description, image, techstack, status, repolink, demolink} = req.body;
    let adminId = req.admin.id;

    try {
        let newProject = await Project.create({admin : adminId, title, description, image, techstack, status, repolink, demolink});
        res.send({newProject})
    } catch (error) {
        res.send({error: error.message})
    }
})

// POST |   /projects/read
router.get('/read', adminAuth ,async (req, res)=>{
    try {
        let projects = await Project.find();
        res.send({projects})
    } catch (error) {
        res.send({error : "unable to fetch projects"})
    }
})

// POST |   /projects/update/:id
router.put('/update/:id', adminAuth , async (req, res)=>{
    let { title, description, image, techstack, status, repolink, demolink} = req.body;
    let adminId = req.admin.id;
    let projId = req.params.id;
    let update = {}

    if(title) update.title = title;

    try {
        let updated = await Project.findByIdAndUpdate(projId,
            {$set : update},
            {new : true}
        )
        if(!updated) res.send({err : "project not found"})
        res.send({updated});
    } catch (error) {
        res.send({error : "unable update projects"})
    }
})

// POST |   /projects/delete/:id
router.delete('/delete/:id', adminAuth ,async (req, res)=>{
    let projId = req.params.id;
    try {
        let deleted = await Project.findByIdAndDelete(projId);
        if(!deleted) res.send({err : "project not found"})
        res.send({deleted})
    } catch (error) {
        res.send({error : "error in deleting project"})
    }
})

module.exports = router