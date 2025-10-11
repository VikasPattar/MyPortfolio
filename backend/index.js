const express = require('express')
const app = express()
const port = 4000;
const connectDB = require('./db')
const cors = require('cors')
app.use(cors())

connectDB();
app.use(express.json())
app.use('/admin', require('./routes/admin'))
app.use('/projects', require('./routes/projects'))
app.use('/blogs', require('./routes/blogs'))

app.get('/', (req, res)=>{
    res.send('hello world this is the backend of portfolio')
})

app.listen(port, (err)=>{
    if(err) res.send(`error : ${err.message}`)
    console.log(`app is running on the port ${port}`)
})