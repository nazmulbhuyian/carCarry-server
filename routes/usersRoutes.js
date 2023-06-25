
const express = require('express');
const router = express.Router();
const usersControllers=require('../controllers/usersControllers');

router.route('/').post(usersControllers.postUser)


module.exports=router;