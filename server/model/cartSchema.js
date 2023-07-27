const mongoose = require('mongoose');

const cartSchema =  new mongoose.Schema({
    ShopId: {
        type: String
    },
    MenuId: {
        type: String
    },
    StudentId: {
        type: String
    },
    OrderPlacedStatus: {
        type: Boolean
    }
}, {timestamps: true});

const cartTable = mongoose.model('cartTable', cartSchema);
module.exports = cartTable;