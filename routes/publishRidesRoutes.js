const express = require('express');
const router = express.Router();
const ridesControllers=require('../controllers/publishRidesControllers');

router.route('/').post(ridesControllers.postRides).get(ridesControllers.getAllRides)
router.route('/:driver').get(ridesControllers.getRides)


module.exports=router;