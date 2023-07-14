const { getDriverRequestBookingsService } = require("../services/driverRequestBookingsServices");

exports.getDriverRequestBookings = async (req, res, next) => {
    try {
            const id = req.params.id;
            const result = await getDriverRequestBookingsService(id);;
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