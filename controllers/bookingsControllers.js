const { postBookingsService } = require("../services/bookingsServices");



exports.postBookings = async (req, res, next) => {
    const data = req.body;
    try {
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