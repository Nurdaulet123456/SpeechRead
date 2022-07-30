const mongoose = require('mongoose');


const keyWords = new mongoose.Schema({
    user_id: {type: String},
    keyWords: {type: String},
    data: {type: String}
});

const Key = mongoose.model('key', keyWords);

module.exports = { Key };