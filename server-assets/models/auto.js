var mongoose = require('mongoose')

// WHAT IS AN AUTO




// this.color = config.color.value
// this.contact = config.contact.value
// this.location = config.location.value
// this.condition = config.condition.value
// this.description = config.description.value
// this.img = config.img.value
// this.id = id++
var schema = new mongoose.Schema({
    title: { type: String, required: true },
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    price: { type: Number, required: true },
    mileage: { type: Number, $gt: -1 },
    color: { type: String },
    contact: { type: String, required: true },
    location: { type: String },
    condition: { type: String, enum: ['New', 'Like New', 'Battle Worn', 'Used'], default: 'Used' },
    description: { type: String },
    img: { type: String, default: '//placehold.it/200x200' }
});

module.exports = mongoose.model('Auto', schema);