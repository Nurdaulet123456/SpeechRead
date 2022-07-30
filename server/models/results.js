const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    user_id: {type: String},
    words: {type: Number},
    page: {type: Number},
    racer: {type: String},
    date: {type: String},
})

const Result = mongoose.model('result', resultSchema)

module.exports = { Result }