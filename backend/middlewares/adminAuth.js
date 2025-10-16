const jwt = require('jsonwebtoken')
const path = require('path')
const AppError = require('../errors/appError')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
const SECRET = process.env.SECRET;

const adminAuth = (req, res, next) => {


    try {
        let token = req.headers['auth-token']

        if (!token) {
            throw new AppError('token not found', 404, 'TOKEN_NOT_FOUND')
        }

        let data = jwt.verify(token, SECRET)

        if (!data) {
            throw new AppError('unable verify login again', 401, 'UNABLE_VERIFY_LOGIN')
        }

        req.admin = data
        next();
    } catch (error) {
        console.error(error.message)
        next(error)
    }
}

module.exports = adminAuth;