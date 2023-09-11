const publishRides = require("../models/PublishRides");


exports.postpublishRidessService = async (data) => {
    try {
        const bookings = await publishRides.create(data);
        return bookings;
    } catch (error) {
        console.log(error.message);
    }
}

exports.getpublishAllRidesService = async (email) => {
    try {
        const bookings = await publishRides.find({ email: email });
        return bookings;
    } catch (error) {
        console.log(error.message);
    }
}

exports.getpublishRidessService = async (data) => {
    try {
        if (data == 'driver') {
            const bookings = await publishRides.find({ role: data });
            return bookings;
        } else {
            const bookings = await publishRides.find({ role: data });
            return bookings;
        }

    } catch (error) {
        console.log(error.message);
    }
}