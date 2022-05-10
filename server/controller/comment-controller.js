const commentService = require('../service/comment-service');

class CommentController {
    async createComment(req, res, next) {
        try {
            const comment = await commentService.createComment(req.body);
            res.status(201).json(comment);
        } catch (err) {
            next(err);
        }
    }

    async getComments(req, res, next) {
        try {
            const comments = await commentService.getComments(req.params.postId);
            res.status(200).json(comments);
        } catch (err) {
            next(err);
        }
    }

    async deleteComment(req, res, next) {
        try {
            const comment = await commentService.deleteComment(req.params.commentId);
            res.status(200).json(comment);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CommentController();
