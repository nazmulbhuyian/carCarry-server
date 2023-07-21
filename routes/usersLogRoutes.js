const express = require('express');
const router = express.Router();
const usersLogControllers=require('../controllers/usersLogControllers');

router.route('/').post(usersLogControllers.postLogUser)
// router.route('/user/:email').get(usersLogControllers.getUserUser)
// router.route('/driver/:email').get(usersLogControllers.getUserDriver)
router.route('/admin/:email').get(usersLogControllers.getUserAdmin)


module.exports=router;