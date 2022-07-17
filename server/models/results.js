const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    words: {type: Number},
    page: {type: Number},
    racer: {type: String}
}, {
    timestamps: true
})

const Result = mongoose.model('result', resultSchema)

module.exports = { Result }