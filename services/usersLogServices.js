const Users = require("../models/Users");

exports.getLogUsersService = async (data) => {
    const users = await Users.findOne({email:data});
    return users;
}