const mongoose = require('mongoose');
var crypto = require('crypto'); 

const studentSchema =  new mongoose.Schema({
    email: {
        type: String,
        required : true
    },
    hash : String, 
    salt : String ,
    Branch: {
        type: String
    },
    name: {
        type: String,
        required : true
    },
    ContactNumber: {
        type: Number
    },
    OTP: {
        type: Number,
        default: 0
    },
    OtpVerify: {
        type: Boolean,
        default: true
    },
    StudentLockedNumber: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

studentSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex'); 
    this.hash = crypto.pbkdf2Sync(password, this.salt,  
        1000, 64, `sha512`).toString(`hex`); 
}

studentSchema.methods.validPassword = function(password) { 
    var hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
    return this.hash === hash; 
}; 

const studentTable = mongoose.model('studentTable', studentSchema);
module.exports = studentTable;