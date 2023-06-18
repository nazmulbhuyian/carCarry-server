const CarsDetails = require("../models/CarsDetails");

exports.getCarsDetailsService = async (query) => {
    const skip = parseInt((query-1)*4);
    const carsDetails = await CarsDetails.find({}).skip(skip).limit(10).sort({"_id": -1});
    return carsDetails;
}
exports.getSingleCarsDetailsService = async (query) => {
    const carsDetails = await CarsDetails.find({_id: query});
    return carsDetails;
}