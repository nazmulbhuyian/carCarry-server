const { getCarsDetailsService,  updateCarsService, getSingleCarsDetailsServices } = require("../services/carsDetailServices");


exports.getCarsDetails = async (req, res, next) => {
    try {
        const filters = { ...req.query };
        const query = filters.page;
        const email = filters.email;

        const result = await getCarsDetailsService(query, email);
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

exports.updateCarsDetails = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await updateCarsService(data);
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
        const result = await getSingleCarsDetailsServices(id);
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