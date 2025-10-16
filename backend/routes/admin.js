const express = require('express')
const router = express.Router()
const Admin = require('../models/adminModel')
const path = require('path')
const env = require('dotenv')
env.config({ path: path.join(__dirname, '../.env') })
const SECRET = process.env.SECRET;
const PORT = process.env.PORT;
const AppError = require('../errors/appError')
const adminAuth = require('../middlewares/adminAuth')
const multer = require('multer')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images/uploads/"); // Folder where files will be saved
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
router.post('/login', async (req, res, next) => {
    let { email, password } = req.body;
    try {
        let admin = await Admin.findOne({ email })
        if(!admin){
            throw new AppError('admin not found', 404, 'ADMIN_NOT_FOUND')
        }
        let verified = await bcrypt.compare(password, admin.password)

        if (verified) {
            let data = {
                id: admin._id
            }
            let token = jwt.sign(data, SECRET)
            res.status(200).send({
                success : true,
                data : {token}
            })
        }
        else {
            throw new AppError('invalid credentials', 400, 'INVALID_CREDENTIALS')
        }
    } catch (error) {
        next(error)
    }
})


// GET |   /admin/fetch
router.get('/fetch', adminAuth, async (req, res) => {
    let adminId = req.admin.id;
    try {
        let fetched = await Admin.findById(adminId);

        res.send({ 
            success: true,
            data : fetched
         })
    } catch (error) {
        console.error(error.message)
        next(error)
    }
})

// PUT  |   /admin/change-password
router.put('/change-password', adminAuth, async (req, res, next) => {
    let { oldPass, newPass } = req.body;
    let adminId = req.admin.id;
    try {
        let admin = await Admin.findById(adminId)
        if (!admin) {
            throw new AppError('admin not found', 404, 'ADMIN_NOT_FOUND')
        }

        let verified = await bcrypt.compare(oldPass, admin.password)

        if (!verified) throw new AppError('old password does not match', 400, 'INVALID_OLD_PASSWORD')
        

        let salt = await bcrypt.genSalt(10)
        let newHash = await bcrypt.hash(newPass, salt)
        console.log(newHash)

        let updatePass = await Admin.findByIdAndUpdate(adminId,
            { $set: { password: newHash } },
            { new: true }
        )
        res.status(200).send({ 
            success: true,
            data : updatePass 
        })
    }
    catch (error) {
        console.log(error.message)
        next(error)
    }
})


//  /admin/edit/credentials |   PUT
router.put('/edit/credentials', adminAuth, async (req, res) => {
    let { name, tagline, github, linkedin, youtube, twitter } = req.body;
    let adminId = req.admin.id;

    let edit = {}

    if (name) edit.name = name;
    if (tagline) edit.tagline = tagline;
    if (github) edit.github = github;
    if (linkedin) edit.linkedin = linkedin;
    if (youtube) edit.youtube = youtube;
    if (twitter) edit.twitter = twitter;

    try {
        let updatedCredentials = await Admin.findByIdAndUpdate(adminId,
            { $set: edit },
            { new: true }
        )

        res.send({ 
            success: true, 
            data: updatedCredentials 
        });

    } catch (error) {
        next(error)
    }
})


//  PUT    |   /admin/edit/about 
router.put('/edit/about', adminAuth, async (req, res) => {
    let { about } = req.body;   //updated about data is sent by the frontend | is extracted by destructuring method
    let adminId = req.admin.id  //

    try {
        let updated = await Admin.findByIdAndUpdate(adminId,
            { $set: { about } },
            { new: true }
        );
        res.status(200).send({ success: true, data: updated.about })
    } catch (error) {
        next(error)
    }
})


// PUT     |   /admin/edit/skills
router.put('/edit/skills', adminAuth, async (req, res) => {
    let { techskills } = req.body;      //updated techskills array is sent by the front end
    let adminId = req.admin.id          //authentication of the user
    if(!adminId) throw new Error("Authentication error")

    try {
        let updatedSkills = await Admin.findByIdAndUpdate(adminId,
            { $set: { techskills } },
            { new: true }
        );

        res.status(200).send({ success: true, data: updatedSkills.techskills })
    } catch (error) {
        console.error(error)
        next(error)
    }
})


// PUT |   /admin/edit/profile-pic
router.put('/edit/profile-pic', upload.single('profilePic'), (req, res) => {
    if (!req.file) {
        // return res.status(400).send({ error: 'file not uploaded' })
        next(new Error("file not uploaded"))
    }

    //if file uploaded successfully then send the successful response
    res.status(200).json({
        success: true,
        data: {
            filename: req.file.filename,
            fileurl: `http://localhost:${PORT}/uploads/${req.file.filename}`
        }
    })
})


module.exports = router;