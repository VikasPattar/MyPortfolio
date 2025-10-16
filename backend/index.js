const express = require('express')
const app = express()
const port = 4000;
const path = require('path')
const connectDB = require('./db')
const cors = require('cors')


connectDB();
app.use(cors())
app.use(express.json())
app.use(express.static('/public'))

app.use('/admin', require('./routes/admin'))
app.use('/projects', require('./routes/projects'))
app.use('/blogs', require('./routes/blogs'))
app.use('/uploads', express.static(path.join(__dirname, "/public/images/uploads")))
app.use((err,req, res, next)=>{
    res.status(err.status || 500).json({
        success : false,
        message : err.message || "Internal Server Error",
        statusCode : err.statusCode || 500,
        code : err.code || "INTERNAL_SERVER_ERROR"
    })
})

app.get('/', (req, res)=>{
    res.send('hello world this is the backend of portfolio')
})

app.listen(port, (err)=>{
    if(err) res.send(`error : ${err.message}`)
    console.log(`app is running on the port ${port}`)
})