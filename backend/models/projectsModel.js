const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    admin : mongoose.Schema.Types.ObjectId,
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : String,
    techstack : {
        type : [String],
        required : true
    },
    status : String,        //inProgress | completed | deployed
    repolink : String,
    demolink : String
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project;