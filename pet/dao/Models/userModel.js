const mongoose = require('mongoose');

// 放映厅
const usersSchema = new mongoose.Schema({
    name: String, // 姓名
    content:String, // 留言内容
    time:String // 时间
})

mongoose.model('usersModel', usersSchema, "users");

module.exports.usersModel = mongoose.model('usersModel');