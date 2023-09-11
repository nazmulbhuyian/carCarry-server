const Earnings = require("../models/Earnings");
const publishRidesBookings = require("../models/PublishRidesBookings");
const Users = require("../models/Users");

exports.postpublishRidesBookingsService = async (data) => {
    try {

        const updateBalanceUser = await Users.findOne({ email: data.b_email });

        if (updateBalanceUser.role == 'driver') {

            const isPubEmailDriver = await Users.findOne({ email: data.pub_email });

            if(isPubEmailDriver.role == 'driver'){

                const info = {
                    e_email: data.pub_email,
                    e_date: data.date,
                    e_prize: data.prize,
                    e_rental: 0,
                    e_ride: 1
                }
                const inserted = await Earnings.findOne({ e_date: data.date, e_email: data.pub_email });
                if (inserted) {
                    const upRide = parseInt(inserted.e_ride);
                    const upRental = upRide + 1;
                    const upPri = parseInt(inserted.e_prize);
                    const upPrize = upPri + data.prize;
                    const updateData = {
                        e_ride: upRental,
                        e_prize: upPrize
                    }
                const earnings = await Earnings.updateOne(inserted, { $set: updateData });
                } else {
                    const earnings = await Earnings.create(info);
                }



                const updateBalance = {
                balance: (updateBalanceUser.balance - data.prize)
                };
                const first = await Users.updateOne(updateBalanceUser, updateBalance, {
                    runValidators: true
                });
                // const updateBalance2User = await Users.findOne({ email: data.pub_email });
                const updateBalance2 = {
                    balance: (isPubEmailDriver.balance + data.prize)
                };
                const second = await Users.updateOne(isPubEmailDriver, updateBalance2, {
                    runValidators: true
                });
                const bookings = await publishRidesBookings.create(data);
                return bookings;
            }else{
            const bookings = await publishRidesBookings.create(data);
            return bookings;
            }
        } else {


            const info = {
                e_email: data.pub_email,
                e_date: data.date,
                e_prize: data.prize,
                e_rental: 0,
                e_ride: 1
            }
            const inserted = await Earnings.findOne({ e_date: data.date, e_email: data.pub_email });
            if (inserted) {
                const upRide = parseInt(inserted.e_ride);
                const upRental = upRide + 1;
                const upPri = parseInt(inserted.e_prize);
                const upPrize = upPri + data.prize;
                const updateData = {
                    e_ride: upRental,
                    e_prize: upPrize
                }
            const earnings = await Earnings.updateOne(inserted, { $set: updateData });
            } else {
                const earnings = await Earnings.create(info);
            }




            const updateBalance = {
                balance: (updateBalanceUser.balance - data.prize)
            };
            const first = await Users.updateOne(updateBalanceUser, updateBalance, {
                runValidators: true
            });
            const updateBalance2User = await Users.findOne({ email: data.pub_email });
            const updateBalance2 = {
                balance: (updateBalance2User.balance + data.prize)
            };
            const second = await Users.updateOne(updateBalance2User, updateBalance2, {
                runValidators: true
            });
            const bookings = await publishRidesBookings.create(data);
            return bookings;
        }

    } catch (error) {
        console.log(error.message);
    }
}

exports.deleteRidesBookingsService = async (data) => {
    try {
        const inserted = await Earnings.findOne({ e_date: data.date, e_email: data.pub_email });
        if (inserted) {
            const upRide = parseInt(inserted.e_ride);
            const upRental = upRide - 1;
            const upPri = parseInt(inserted.e_prize);
            const upPrize = upPri - data.prize;
            const updateData = {
                e_ride: upRental,
                e_prize: upPrize
            }
            const earnings = await Earnings.updateOne(inserted, { $set: updateData });
        }
    
        const firstUser = await Users.findOne({ email: data.b_email });
        const updateBalance = {
            balance: (firstUser.balance + data.prize)
        };
        const first = await Users.updateOne(firstUser, updateBalance, {
            runValidators: true
        });

        const secondUser = await Users.findOne({ email: data.pub_email });
        const updateBalance2 = {
            balance: (secondUser.balance - data.prize)
        };
        const second = await Users.updateOne(secondUser, updateBalance2, {
            runValidators: true
        });
    
        const bookings = await publishRidesBookings.deleteOne({ _id: data._id });
        return bookings;
    } catch (error) {
        console.log(error);
    }
}

exports.updateSingleRidesBookingsService = async (data) => {
    try {
        const bookings = await publishRidesBookings.findOne({ _id: data._id });
        const updateStatus = {
            status: 'OK'
        };
        const updateBooking = await publishRidesBookings.updateOne(bookings, updateStatus, {
            runValidators: true
        });
        return updateBooking;
    } catch (error) {
        console.log(error);
    }
}

exports.deletepublishRidesBookingsService = async (data) => {
    try {
        const bookings = await publishRidesBookings.deleteOne({ _id: data._id });
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