const express = require('express');
const router = express.Router();
const wishListControllers=require('../controllers/wishListControllers');

router.route('/').post(wishListControllers.postWishList)
router.route('/:email').get(wishListControllers.GetSingleWishList)


module.exports=router;