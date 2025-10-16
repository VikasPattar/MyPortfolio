const mongoose = require('mongoose')

 const adminSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    github : String,
    linkedin : String,
    youtube : String,
    twitter : String,
    tagline : String,
    about : String,
    techskills : {
        type : [String],
        required : true
    }
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;