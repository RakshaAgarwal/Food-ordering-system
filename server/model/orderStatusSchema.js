const mongoose = require('mongoose');

const orderStatusSchema =  new mongoose.Schema({
    OrderId: {
        type: String
    },
    StudentId: {
        type: String
    },
    ShopId: {
        type: String
    },
    ApprovalStatus: {
        type: Boolean
    },
    TakeAwayStatus: {
        type: Boolean
    },
}, {timestamps: true});

const orderStatusTable = mongoose.model('orderStatusTable', orderStatusSchema);
module.exports = orderStatusTable;