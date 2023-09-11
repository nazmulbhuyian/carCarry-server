const Bookings = require("../models/Bookings");
const Earnings = require("../models/Earnings");
const Users = require("../models/Users");

exports.postBookingsService = async (data) => {
    try {
        const info = {
            e_email: data.o_email,
            e_date: data.date,
            e_prize: data.prize,
            e_rental: 1,
            e_ride: 0
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

        const updateBalance = {
            balance: (data.userBalance - data.prize)
        };
        const first = await Users.updateOne({ email: data.c_email }, updateBalance, {
            runValidators: true
        });
        const updateBalance2 = {
            balance: (data.userBalance + data.prize)
        };
        const second = await Users.updateOne({ email: data.o_email }, updateBalance2, {
            runValidators: true
        });

        const bookings = await Bookings.create(data);
        return bookings;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteBookingsService = async (data) => {
    try {

        const inserted = await Earnings.findOne({ e_date: data.date, e_email: data.o_email });
        if (inserted) {
            const upRent = parseInt(inserted.e_rental);
            const upRental = upRent - 1;
            const upPri = parseInt(inserted.e_prize);
            const upPrize = upPri - data.prize;
            const updateData = {
                e_rental: upRental,
                e_prize: upPrize
            }
            const earnings = await Earnings.updateOne(inserted, { $set: updateData });
        }

        const firstUser = await Users.findOne({ email: data.c_email });
        const updateBalance = {
            balance: (firstUser.balance + data.prize)
        };
        const first = await Users.updateOne(firstUser, updateBalance, {
            runValidators: true
        });

        const secondUser = await Users.findOne({ email: data.o_email });
        const updateBalance2 = {
            balance: (secondUser.balance - data.prize)
        };
        const second = await Users.updateOne(secondUser, updateBalance2, {
            runValidators: true
        });

        const bookings = await Bookings.deleteOne({ _id: data._id });
        return bookings;
    } catch (error) {
        console.log(error);
    }
}

exports.updateSingleBookingsService = async (data) => {
    try {
        const bookings = await Bookings.findOne({ _id: data._id });
        const updateStatus = {
            status: 'OK'
        };
        const updateBooking = await Bookings.updateOne(bookings, updateStatus, {
            runValidators: true
        });
        return updateBooking;
    } catch (error) {
        console.log(error);
    }
}

exports.getSingleBookingsService = async (email) => {
    const bookings = await Bookings.find({ c_email: email }).sort({ "_id": -1 });
    return bookings;
}

