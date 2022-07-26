const mongoose = require('mongoose');


const recording = new mongoose.Schema({
    record: {type: Number},
});

const Recording = mongoose.model('recording', recording);

module.exports = { Recording };