const { usersModel } = require("./Models/userModel.js");

// 新增电影
module.exports.addUser = async function (data) {
    console.log(data);
    const result = await usersModel.create(data);
    console.log(result);
    return result;
}
module.exports.getUsers = async function () {
    return await usersModel.find();
}