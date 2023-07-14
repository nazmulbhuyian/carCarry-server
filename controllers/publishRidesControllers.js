const { postpublishRidessService, getpublishRidessService } = require("../services/publishRideServices");


exports.postRides = async (req, res, next) => {
    try {
            const data = req.body;
            const result = await postpublishRidessService(data);
            if (!result) {
                return res.send('nothing found');
            }
            res.status(200).json({
                status: 'Successfully Added',
                data: result
            })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.getRides = async (req, res, next) => {
    try {
            const data = req.params.driver;
            const result = await getpublishRidessService(data);
            if (!result) {
                return res.send('nothing found');
            }
            res.status(200).json({
                status: 'Successfully Added',
                data: result
            })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}