const mongoose = require('mongoose');

const shopKeeperSchema =  new mongoose.Schema({
    ShopName: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    ContactNumber: {
        type: Number
    },
    Owner: {
        type: String
    },
    OTP: {
        type: Number,
        default: 0
    },
    OtpVerify: {
        type: Boolean,
        default: true
    },
    image:{
        type: String
    }
}, {timestamps: true});

const shopkeeperTable = mongoose.model('shopkeeperTable', shopKeeperSchema);
module.exports = shopkeeperTable;