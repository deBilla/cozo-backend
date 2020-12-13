const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    ratingValue: String,
    reviewCount: String,
    venderName: String,
    price: String,
    imageURL: String,
    addedDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);