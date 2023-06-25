const express = require('express');
const router = express.Router();
const wishListControllers=require('../controllers/wishListControllers');

router.route('/').post(wishListControllers.postWishList)


module.exports=router;