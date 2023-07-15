const CarsDetails = require("../models/CarsDetails");

exports.getCarsDetailsService = async (query, email) => {
    if (email != null) {
        const carsDetails = await CarsDetails.find({ u_email: email });
        return carsDetails;
    } else {
        // const skip = parseInt((query - 1) * 4);
        const carsDetails = await CarsDetails.find({}).limit(10).sort({ "_id": -1 });
        // const carsDetails = await CarsDetails.find({}).skip(skip).limit(10).sort({ "_id": -1 });
        return carsDetails;
    }
}


exports.updateCarsService = async (data) => {
    try {
        const id = data._id;
        const users = await CarsDetails.updateOne({ _id: id }, data, {
            runValidators: true
        });
        return users;
    } catch (error) {
        console.log(error.message);
    }
}

exports.getSingleCarsDetailsService = async (query) => {
    const carsDetails = await CarsDetails.find({ _id: query });
    return carsDetails;
}