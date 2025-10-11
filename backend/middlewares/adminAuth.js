const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config({path : path.join(__dirname, '../.env')})
const SECRET = process.env.SECRET;

const adminAuth =(req, res, next)=>{
    let token = req.headers['auth-token']

    if(!token){
        res.send({error : 'token not found'})
    }

    try {
        let data = jwt.verify(token, SECRET)

        if(!data){
            res.send('unable verify login again')
        }

        req.admin = data
        next();
    } catch (error) {
        res.send({error : error.message})
    }
}

module.exports = adminAuth;