const express = require('express');
const router = express.Router();
const bookingsControllers=require('../controllers/bookingsControllers');

router.route('/').post(bookingsControllers.postBookings)
router.route('/:email').get(bookingsControllers.getSingleBookings)


module.exports=router;