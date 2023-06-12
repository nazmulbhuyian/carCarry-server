
const express = require("express");
const router = express.Router();
const commentsControllers = require('../controllers/commentsControllers');


router.route('/').get(commentsControllers.getComments)

module.exports = router;