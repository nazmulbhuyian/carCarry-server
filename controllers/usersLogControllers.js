const { getLogUsersService, getDriverService, getAdminService, getUserService } = require("../services/usersLogServices");
const bcrypt = require("bcryptjs")
const saltRounds = 10
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.postLogUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;


        const user = await getLogUsersService(email)
        if (!user) {
            return res.status(400).json({
                status: 'Failled',
                message: "user get Failed",
                error: error.message
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({
                status: 'Failled',
                message: "user get Failed",
                error: error.message
            })
        }

        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN);
        return res.send({ accessToken: token, user })

    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "user get Failed",
            error: error.message
        })
    }
}

// exports.getUserUser = async (req, res, next) => {
//     try {
//         const email = req.params.email;
//         const result = await getUserService(email);
//         if (!result) {
//             return res.send('nothing found');
//         }
//         res.status(200).send(result)
//     } catch (error) {
//         res.status(400).json({
//             status: 'Failled',
//             message: "Data query Failed",
//             error: error.message
//         })
//     }
// }

// exports.getUserDriver = async (req, res, next) => {
//     const email = req.params.email
//     try {
//         const result = await getDriverService(email);
//         if (!result) {
//             return res.send('nothing found');
//         }
//         res.status(200).send(result)
//     } catch (error) {
//         res.status(400).json({
//             status: 'Failled',
//             message: "Data query Failed",
//             error: error.message
//         })
//     }
// }


exports.getUserAdmin = async (req, res, next) => {
    const email = req.params.email
    try {
        const result = await getAdminService(email);
        if (!result) {
            return res.send('nothing found');
        }
        res.status(200).send(result)
    } catch (error) {
        res.status(400).json({
            status: 'Failled',
            message: "Data query Failed",
            error: error.message
        })
    }
}