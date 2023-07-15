
const express = require('express');
const router = express.Router();
const carsDetailControllers = require('../controllers/carsDetailsControllers');

router.route('/').get(carsDetailControllers.getCarsDetails).patch(carsDetailControllers.updateCarsDetails)
router.route('/:id').get(carsDetailControllers.getSingleCarsDetails);

module.exports = router;