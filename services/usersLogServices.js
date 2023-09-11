const Users = require("../models/Users");

exports.getLogUsersService = async (data) => {
    const users = await Users.findOne({ email: data });
    return users;
}

// exports.getUserService = async (email) => {
//     try {
//         const booking = await Users.findOne({ email: email });
//         console.log(booking, email);
//         return { isUser: booking?.role == 'lift' }
//     } catch (error) {
//         console.log(error);
//     }
// }

// exports.getDriverService = async (email) => {
//     const booking = await Users.findOne({ email: email });
//     return { isDriver: booking?.role == 'driver' }
// }

exports.getAdminService = async (email) => {
    const booking = await Users.findOne({ email: email });
    return booking?.role == 'admin';
}