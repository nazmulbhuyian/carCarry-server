const express = require('express');
const router = express.Router();
const bookingsControllers=require('../controllers/bookingsControllers');

router.route('/').post(bookingsControllers.postBookings).delete(bookingsControllers.deleteBookings).patch(bookingsControllers.updateBookings)
router.route('/:email').get(bookingsControllers.getSingleBookings)


module.exports=router;