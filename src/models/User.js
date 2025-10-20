const { timeStamp } = require('console');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
       type: String,
       require: true,
       unique: true
    }
},{timeStamps: true});

module.exports = mongoose.model('User',userSchema);