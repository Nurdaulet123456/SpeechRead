const mongoose = require('mongoose');


const recording = new mongoose.Schema({
    user_id: {type: String},
    record: {type: Number},
});

const Recording = mongoose.model('recording', recording);

module.exports = { Recording };