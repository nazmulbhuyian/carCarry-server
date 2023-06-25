const Bookings = require("../models/Bookings");

exports.postBookingsService = async (data) => {
    const bookings = await Bookings.create(data);
    return bookings;
}