const emailValidator = require('email-validator')
const passport = require('passport')
const JWT = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config()

// regex to check all passwords follow policy:
// min 8 characters, 1 alphabetical char, 1 numerical digit
const strongPassword = new RegExp('(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})')

function registerUser(req, res, next) {
    if(!req.body.email) return next({ message: 'Missing "email" field' })
    if(!emailValidator.validate(req.body.email)) return next({ message: 'Invalid email' })
    if(!req.body.password) return next({ message: 'Missing "password" field' })
    if(!req.body.password.match(strongPassword)) return next({ message: 'Password is too weak' })
    if(!req.body.firstName) return next({ message: 'Missing "firstName" field' })
    if(!req.body.lastName) return next({ message: 'Missing "lastName" field' })

    let { email, password, firstName, lastName } = req.body
    User.register(new User({ email, firstName, lastName }), password, (err, user) => {
        if(err && err.toString().includes('username is already registered')) {
            return next({ message: 'A user has already registered with that email' })
        } else if(err) {
            console.log(`Registration error: ${err}`)
            return next({ message: 'Registration error' })
        }

        return res.json({ success: true, message: 'Registration successful' })
    })
}

function loginUser(req, res, next) {
    passport.authenticate('local', (_, user, err) => {
        if(err) {
            return next({ message: err.message })
        }

        const token = JWT.sign({ username: user.username }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '2d' })
        res.json({ success: true, token })
    })(req, res, next)
}

module.exports = {
    registerUser,
    loginUser
}
