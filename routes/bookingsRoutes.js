const express = require('express');
const router = express.Router();
const bookingsControllers=require('../controllers/bookingsControllers');

router.route('/').post(bookingsControllers.postBookings)


module.exports=router;