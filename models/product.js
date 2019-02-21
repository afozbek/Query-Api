const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    //Much more coming
}, { timestamps: true })

module.exports = mongoose.model('Products', productSchema);