const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const {body} = require('express-validator')
const passwordComplexity = require('joi-password-complexity')

const userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: String
}, { timestamps: true }) 

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: '7d'})

    return token
}


const User = mongoose.model('user', userSchema)

const validate = data => {
    const schema = joi.object({
        name: joi.string().required().label('Your Name'),
        username: joi.string().required().label('Your username'),
        email: joi.string().email().required().label('Your email'),
        password: passwordComplexity().required().label('Your password'),
        avatar: joi.string().optional().label('Your avatar'),
    })

    return schema.validate(data)
}

module.exports = { User, validate }