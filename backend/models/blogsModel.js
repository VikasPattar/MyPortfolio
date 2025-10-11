const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    admin : mongoose.Schema.Types.ObjectId,
    title : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    status : String     //draft | saved | published
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;