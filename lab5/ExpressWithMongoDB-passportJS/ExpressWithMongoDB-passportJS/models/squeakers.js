const mongoose = require('mongoose');

const squeakerSchema = new mongoose.Schema({
    name: String,
});
module.exports = mongoose.model('Squeaker', squeakerSchema);