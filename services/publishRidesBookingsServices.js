const publishRidesBookings = require("../models/PublishRidesBookings");
const Users = require("../models/Users");

exports.postpublishRidesBookingsService = async (data) => {
    try {
        
        const updateBalanceUser = await Users.findOne({ email: data.b_email });
        if(updateBalanceUser.role == 'driver'){
            const bookings = await publishRidesBookings.create(data);
            return bookings;
        }else{
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