const { addUser,getUsers } = require('../dao/usersDao.js');
// 新增放映厅
module.exports.addUser = async function (data) {
    const result = await addUser(data);
    if (result) {
        return true;
    } else {
        return false;
    }
}

module.exports.getUsers = async function () {
  return await getUsers(); 
}