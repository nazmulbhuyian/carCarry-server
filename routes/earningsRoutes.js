const express = require('express');
const router = express.Router();
const earningsControllers=require('../controllers/earningsControllers');

router.route('/:email').get(earningsControllers.earningsDetails)


module.exports=router;