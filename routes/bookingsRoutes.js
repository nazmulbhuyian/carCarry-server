const express = require('express');
const router = express.Router();
const bookingsControllers=require('../controllers/bookingsControllers');
const verifyToken = require('../midleware/verifyToken');

router.route('/').post(bookingsControllers.postBookings).delete(bookingsControllers.deleteBookings).patch(bookingsControllers.updateBookings)
router.route('/:email').get(verifyToken, bookingsControllers.getSingleBookings)


module.exports=router;