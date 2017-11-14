var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    size: { type: Number },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
});

module.exports = mongoose.model('Property', schema);