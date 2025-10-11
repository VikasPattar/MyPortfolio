const express = require('express')
const router = express.Router()
const Admin = require('../models/adminModel')
const path = require('path')
const env = require('dotenv')
env.config({path : path.join(__dirname,'../.env')})
const SECRET = process.env.SECRET;
const adminAuth = require('../middlewares/adminAuth')
const multer = require('multer')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder where files will be saved
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // e.g. 1697032012-123456789.png
  },
});

// Step 2: Initialize Multer
const upload = multer({ storage: storage });


// POST | /admin/create

// router.post('/create', async (req, res)=>{
//     let {name, email, password,github, linkedin, youtube, twitter, tagline, about, techskills} = req.body;

//     try {
//         let admin = await Admin.create({name, email, password,github, linkedin, youtube, twitter, tagline, about, techskills});
//         res.send({admin, status:'success'})
//     } catch (error) {
//         res.send({error: error.message})
//     }
// })


//endpoint : /admin/login | POST
router.post('/login', async (req, res) => {
    let { email, password } = req.body;
    try {
        let admin = await Admin.findOne({email})
        let verified = await bcrypt.compare(password, admin.password)

        if(verified){
            let data = {
            id : admin._id
        }
            let token = jwt.sign(data, SECRET)
            res.send({token})
        }
        else{
            res.send({error : 'invalid credentials'})
        }
    } catch (error) {
        throw Error({error : error.message})
    }
})


// GET |   /admin/fetch
router.get('/fetch', adminAuth, async(req, res)=>{
    let adminId = req.admin.id;
    try {
        let fetched = await Admin.findById(adminId);
        res.send({fetched})
    } catch (error) {
        res.send({error : error.message})
    }
})

// PUT  |   /admin/change-password
router.put('/change-password',adminAuth, async(req, res)=>{
    let{oldPass, newPass} = req.body;
    let adminId = req.admin.id;
    try{
        let admin = await Admin.findById(adminId)
        if(!admin){
            res.send({error: 'user not found'})
        }
        console.log(admin)

        let verified = await bcrypt.compare(oldPass, admin.password)

        if(!verified) res.send({err : 'old password is doesnt match'})
            console.log('verified')

        let salt = await bcrypt.genSalt(10)
            let newHash = await bcrypt.hash(newPass, salt)
        console.log(newHash)
        
        let updatePass = await Admin.findByIdAndUpdate(adminId,
            {$set : {password : newHash}},
            {new : true}
        )
        res.send({updatePass})
    }
    catch(err){
        res.send({err : 'error in changing pass',message : err.message})
    }
})


//  /admin/edit/credentials |   PUT
router.put('/edit/credentials',adminAuth, async (req, res) => {
    let {name, tagline, github, linkedin, youtube, twitter} = req.body;
    let adminId = req.admin.id;

    let edit = {}

    if(name) edit.name = name;
    if(tagline) edit.tagline = tagline;
    if(github) edit.github = github;
    if(linkedin) edit.linkedin = linkedin;
    if(youtube) edit.youtube = youtube;
    if(twitter) edit.twitter = twitter;

    try {
        let updatedCredentials = await Admin.findByIdAndUpdate(adminId,
            {$set : edit},
            {new : true}
        )

        res.send({updatedCredentials});
    } catch (error) {
        res.send({error : error.message});
    }
})


//  PUT    |   /admin/edit/about 
router.put('/edit/about', adminAuth, async (req, res) => {
    let {about} = req.body;
    let adminId = req.admin.id

    try {
        let updated = await Admin.findByIdAndUpdate(adminId,
            {$set : {about}},
            {new : true}
        );
        res.send({updated : updated.about})
    } catch (error) {
        res.send({error : error.message})
    }
})


// PUT     |   /admin/edit/skills
router.put('/edit/skills', adminAuth, async (req, res) => {
    let {techskills} = req.body;
    let adminId = req.admin.id

    try{
        let updatedSkills = await Admin.findByIdAndUpdate(adminId,
            {$set : {techskills}},
            {new : true}
        );

        res.send({updatedSkills : updatedSkills.techskills})
    }catch(error){
        res.send({error : error.message})
    }
})


// PUT |   /admin/edit/profile-pic
router.put('/edit/profile-pic', (req, res) => {
    res.send('profile pic')
})

module.exports = router;