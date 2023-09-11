
const express = require("express");
const router = express.Router();
const commentsControllers = require('../controllers/commentsControllers');


router.route('/').post(commentsControllers.postComment)
router.route('/:name').get(commentsControllers.getComments).delete(commentsControllers.deleteComment)

module.exports = router;