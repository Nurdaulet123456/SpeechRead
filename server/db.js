const mongoose = require('mongoose');

module.exports = () => {
    const connectParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect(process.env.DB, connectParams)
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
        console.log('Could not connect to database');
    }
}