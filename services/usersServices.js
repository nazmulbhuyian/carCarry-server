const Users = require("../models/Users");

exports.getUsersService = async (data) => {
    const users = await Users.findOne({email:data});
    return users;
}
exports.postUsersService = async (data) => {
    const users = await Users.create(data);
    return users;
}