const { postUsersService, getUsersService, updateUsersService } = require("../services/usersServices");
const bcrypt = require("bcryptjs")
const saltRounds = 10


exports.postUser = async (req, res, next) => {
    const data = req.body;
    try {
        const inserted = await getUsersService(data?.email)
        if (inserted) {
            return res.send({ message: 'Previously Added' })
        }

        bcrypt.hash(data.password, saltRounds, async function (err, hash) {
            const newUser = {
                name: data.name,
                email: data.email,
                role: data.role,
                password: hash,
                balance: data.balance,
                img: ''
            }
            const result = await postUsersService(newUser);
            if (!result) {
                return res.send('nothing found');
            }
            res.status(200).json({
                status: 'Successfully',
                data: result
            })
        });

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data Post Failed",
            error: error.message
        })
    }
}



exports.getSingleUser = async (req, res, next) => {
    
    try {
        const email = req.params.email;

        const result = await getUsersService(email);
        res.status(200).json({
            status: 'Successfully',
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

exports.updateUser = async (req, res, next) => {
    
    try {
        const data = req.body;

        const result = await updateUsersService(data);
        if (result.acknowledged==false) {
            return res.status(400).json({
              status: "fail",
              error: "Couldn't update",
            });
          }
        res.status(200).json({
            status: 'Successfully',
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