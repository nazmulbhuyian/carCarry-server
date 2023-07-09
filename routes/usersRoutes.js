
const express = require('express');
const router = express.Router();
const usersControllers=require('../controllers/usersControllers');

router.route('/').post(usersControllers.postUser).patch(usersControllers.updateUser)
router.route('/:email').get(usersControllers.getSingleUser)


module.exports=router;