const WishList = require("../models/WishList");

exports.getWishListService = async (data) => {
    const wishList = await WishList.findOne({c_img: data.c_img, c_name: data.c_name, u_email: data.u_email});
    return wishList;
}

exports.postWishListService = async (data) => {
    const wishList = await WishList.create(data);
    return wishList;
}
