const mongoose = require('mongoose')

const connect = ()=>{
    try {
        mongoose.connect('mongodb://localhost:27017/portfolio')
        console.log('connected to mongo server')
    } catch (error) {
        console.log(`cannot connect to mongo server: ${error.message}`)
    }
}

module.exports = connect