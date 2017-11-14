var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    sex: { type: String, required: true },
    age: { type: Number },
    name: { type: String },
    price: { type: Number },
    image: { type: String, default: '//placehold.it/200x200' },
    species: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String }
});

module.exports = mongoose.model('Animal', schema);