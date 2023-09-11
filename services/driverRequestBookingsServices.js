const Bookings = require("../models/Bookings");

exports.getDriverRequestBookingsService = async (id) => {
    const bookings = await Bookings.find({ o_id: id });
    return bookings;
}