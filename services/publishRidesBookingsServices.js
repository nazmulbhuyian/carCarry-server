const publishRidesBookings = require("../models/PublishRidesBookings");

exports.postpublishRidesBookingsService = async (data) => {
    try {
        const bookings = await publishRidesBookings.create(data);
        return bookings;
    } catch (error) {
        console.log(error.message);
    }
}

exports.getpublishRidesBookingsService = async (email) => {
    try {
        const bookings = await publishRidesBookings.find({ b_email: email });
        return bookings;
    } catch (error) {
        console.log(error.message);
    }
}

exports.getpublishRidesRequestMeBookingsService = async (email) => {
    try {
        const bookings = await publishRidesBookings.find({ pub_email: email });
        return bookings;
    } catch (error) {
        console.log(error.message);
    }
}