const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    subject: {
        type: String
    },
    message: {
        type: String
    }   

});

module.exports = mongoose.model('message', messageSchema);