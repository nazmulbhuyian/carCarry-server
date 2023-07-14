const Bookings = require("../models/Bookings");
const Earnings = require("../models/Earnings");

exports.postBookingsService = async (data) => {
    const info = {
        e_email: data.o_email,
        e_date: data.date,
        e_prize: data.prize,
        e_rental: 1
    }
    const inserted = await Earnings.findOne({ e_date: data.date, e_email: data.o_email });
    if (inserted) {
        const upRent = parseInt(inserted.e_rental);
        const upRental = upRent + 1;
        const upPri = parseInt(inserted.e_prize);
        const upPrize = upPri + data.prize;
        const updateData = {
            e_rental: upRental,
            e_prize: upPrize
        }
        const earnings = await Earnings.updateOne(inserted, { $set: updateData });
    } else {
        const earnings = await Earnings.create(info);
    }
    const bookings = await Bookings.create(data);
    return bookings;
}

exports.getSingleBookingsService = async (email) => {
    const bookings = await Bookings.find({ c_email: email }).sort({ "_id": -1 });
    return bookings;
}