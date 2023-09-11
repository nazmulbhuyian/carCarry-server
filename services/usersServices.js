const Users = require("../models/Users");

exports.getUsersService = async (data) => {
    // const users = await Users.findOne({email:data})
    const users = await Users.findOne({email:data}).select('-password -createdAt -updatedAt -__v')
    return users;
}
exports.postUsersService = async (data) => {
    const users = await Users.create(data);
    return users;
}
exports.updateUsersService = async (data) => {
    const id=data._id;
    const findUser = await Users.findOne({_id:id})
    delete data._id;
    const users = await Users.updateOne(findUser, data, {
        runValidators: true
      });
    return users;
}