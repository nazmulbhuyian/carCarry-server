const express = require('express');
const router = express.Router();
const driverRequestBookingsControllers=require('../controllers/DriverRequestBookingsControllers');

router.route('/:id').get(driverRequestBookingsControllers.getDriverRequestBookings)


module.exports=router;