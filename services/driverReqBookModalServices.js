const Bookings = require("../models/Bookings");

exports.getDriverReqModalBookingsService = async (id) => {
    const bookings = await Bookings.findOne({ _id: id });
    return bookings;
}