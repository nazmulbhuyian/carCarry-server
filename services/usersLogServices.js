const Users = require("../models/Users");

exports.getLogUsersService = async (data) => {
    const users = await Users.findOne({email:data});
    return users;
}

exports.getDriverService = async (email) => {
    const booking = await Users.findOne({email: email});
    return { isDriver: booking?.role == 'driver' || booking?.role == 'admin' }
}

exports.getAdminService = async (email) => {
    const booking = await Users.findOne({email: email});
    return booking?.role == 'admin'; 
}