const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    ratingValue: Number,
    reviewCount: Number,
    venderName: String,
    price: Number,
    addedDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema);