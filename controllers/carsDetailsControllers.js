const { getCarsDetailsService, getSingleCarsDetailsService } = require("../services/carsDetailServices");


exports.getCarsDetails = async (req, res, next) => {
    try {
        const filters = { ...req.query };
        const query = filters.page;

        const result = await getCarsDetailsService(query);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}

exports.getSingleCarsDetails = async (req, res, next) => {
    try {
        const {id} = req.params;

        const result = await getSingleCarsDetailsService(id);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).send(result)
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}