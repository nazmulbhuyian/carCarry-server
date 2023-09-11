const express = require('express');
const router = express.Router();
const driverRequestBookingsControllers=require('../controllers/driverReqBookModalControllers');

router.route('/:id').get(driverRequestBookingsControllers.getDriverReqModalBookings)


module.exports=router;