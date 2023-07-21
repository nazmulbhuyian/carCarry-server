const { postpublishRidesBookingsService, getpublishRidesBookingsService, getpublishRidesRequestMeBookingsService, deleteRidesBookingsService, deletepublishRidesBookingsService, updateSingleRidesBookingsService,  } = require("../services/publishRidesBookingsServices");

exports.postRidesBookings = async (req, res, next) => {
    try {
            const data = req.body;
            const result = await postpublishRidesBookingsService(data);
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

exports.deleteRidesBookings = async (req, res, next) => {
    try {
            const data = req.body;
            const result = await deleteRidesBookingsService(data);
            if (!result) {
                return res.send('nothing found');
            }
            res.status(200).json({
                status: 'Successfully Deleted',
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

exports.updateRidesBookings = async (req, res, next) => {
    try {
            const data = req.body;
            const result = await updateSingleRidesBookingsService(data);
            if (!result) {
                return res.send('nothing found');
            }
            res.status(200).json({
                status: 'Successfully Updated',
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

exports.deleteRequestMeRidesBookings = async (req, res, next) => {
    try {
            const data = req.body;
            const result = await deletepublishRidesBookingsService(data);
            if (!result) {
                return res.send('nothing found');
            }
            res.status(200).json({
                status: 'Successfully Deleted',
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


exports.getRidesBookings = async (req, res, next) => {
    try {
            const email = req.params.email;
            const result = await getpublishRidesBookingsService(email);
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

exports.getRidesRequestMeBookings = async (req, res, next) => {
    try {
            const email = req.params.email;
            const result = await getpublishRidesRequestMeBookingsService(email);
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