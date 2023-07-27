const mongoose = require('mongoose');

const approvalSchema =  new mongoose.Schema({
    ApprovalStatus: {
        type: Boolean
    },
    TakeAwayStatus: {
        type: Boolean
    },
    ShopId: {
        type: String
    },
    StudentId: {
        type: String
    }
}, {timestamps: true});

const approvalTable = mongoose.model('approvalTable', approvalSchema);
module.exports = approvalTable;