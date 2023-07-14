const { postWishListService, getWishListService, getSingleWishListService } = require("../services/wishListServices");


exports.postWishList = async (req, res, next) => {
    const data = req.body;
    const info = {
        c_img: data.c_img,
        c_name: data.c_name,
        u_email: data.u_email,
    }
    try {
        const inserted = await getWishListService(info)
        if (inserted) {
            return res.send({ message: 'Previously Added' })
        }
        const result = await postWishListService(data);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfully Added',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}

exports.GetSingleWishList = async (req, res, next) => {
    try {
        const email = req.params.email;
        const result = await getSingleWishListService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).json({
            status: 'Successfull',
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data get Failed",
            error: error.message
        })
    }
}