const { postBookingsService,  getSingleBookingsService, getSingleRequestBookingsService } = require("../services/bookingsServices");



exports.postBookings = async (req, res, next) => {
    try {
            const data = req.body;
            const result = await postBookingsService(data);
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

exports.getSingleBookings = async (req, res, next) => {
    try {
            const email = req.params.email;
            const result = await getSingleBookingsService(email);
            if (!result) {
                return res.send('nothing found');
            }
            res.status(200).json({
                status: 'Successfull',
                data: result
            })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data get Failed",
            error: error.message
        })
    }
}