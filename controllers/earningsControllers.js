const { getEarningsDetailsService } = require("../services/earningsServices");

exports.earningsDetails = async (req, res, next) => {
    try {
        const {email} = req.params;

        const result = await getEarningsDetailsService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}