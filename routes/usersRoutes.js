
const express = require('express');
const router = express.Router();
const usersControllers=require('../controllers/usersControllers');
const verifyToken = require('../midleware/verifyToken');

router.route('/').post(usersControllers.postUser).patch(verifyToken, usersControllers.updateUser)
router.route('/:email').get(usersControllers.getSingleUser)


module.exports=router;