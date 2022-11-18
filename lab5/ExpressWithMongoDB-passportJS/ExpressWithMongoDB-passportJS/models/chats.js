const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    message: String
});
module.exports = mongoose.model('Chats', chatSchema);