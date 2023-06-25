const { getCommentsService, postCommentService, deleteCommentService } = require("../services/commentsServices");


exports.getComments = async(req, res, next) =>{
    const query = req.params.name;
    try {
      const result = await getCommentsService(query);
      if(!result){
       return res.send('nothing found');
      }
      res.status(200).json({
        status: 'Successfully',
        data: result
      })
    } catch (error) {
      res.status(400).json({
        status: 'Failled',
        message: "Data query Failed",
        error: error.message
      })
    }
  }

  exports.postComment = async (req, res, next) => {
    const data=req.body;
    try {
            const result = await postCommentService(data);
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

exports.deleteComment = async (req, res, next) => {
  const query = req.params.name;
  try {
      const result = await deleteCommentService(query);
      if (!result) {
          return res.send('Nothing Delete');
      }
      res.status(200).json({
          status: 'Successfully Delete',
          data: result
      })
  } catch (error) {
      res.status(400).json({
          status: 'Failled',
          message: "Data post Failed",
          error: error.message
      })
  }
}