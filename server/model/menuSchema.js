const mongoose = require('mongoose');

const menuSubSchema = new mongoose.Schema({
    ItemName: String,
    ItemPrice: Number,
    Image: String,
    description: String,
    rating: Number
  });

const menuSchema =  new mongoose.Schema({
    // _id: Object,
    menu: [menuSubSchema],
    shopkeeper_id: {
        type: String,
        required:[true, 'Please Add a Valid Email Id']
    }
}, {timestamps: true});

const menuTable = mongoose.model('menuTable', menuSchema);
module.exports = menuTable;