const express = require('express');
const router = express.Router();
const ridesBookingsControllers=require('../controllers/publishRidesBookingsControllers');

router.route('/').post(ridesBookingsControllers.postRidesBookings)
router.route('/userRequestMe/:email').get(ridesBookingsControllers.getRidesRequestMeBookings)
router.route('/:email').get(ridesBookingsControllers.getRidesBookings)


module.exports=router;