const express = require('express');
const router = express.Router();
const ridesBookingsControllers=require('../controllers/publishRidesBookingsControllers');

router.route('/').post(ridesBookingsControllers.postRidesBookings).delete(ridesBookingsControllers.deleteRidesBookings).patch(ridesBookingsControllers.updateRidesBookings)
router.route('/userRequestMe/:email').get(ridesBookingsControllers.getRidesRequestMeBookings).delete(ridesBookingsControllers.deleteRequestMeRidesBookings)
router.route('/:email').get(ridesBookingsControllers.getRidesBookings)


module.exports=router;