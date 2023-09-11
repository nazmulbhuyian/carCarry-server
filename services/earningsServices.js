const Earnings = require("../models/Earnings");

exports.getEarningsDetailsService = async (email) => {
    const earningsDetails = await Earnings.find({ e_email: email }).select('-password -_id -createdAt -updatedAt -__v');
    return earningsDetails;
}