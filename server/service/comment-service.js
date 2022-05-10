const ApiError = require('../exceptions/api-errors');
const {User, Post, Comment} = require('../db/models');

class CommentService {
    async createComment(postId, userId, comment) {
        const post = await Post.findByPk({where: {id: postId}});
        if (!post) {
            throw new ApiError('Post not found', 404);
        }
        const user = await User.findByPk(userId);
        if (!user) {
            throw new ApiError('User not found', 404);
        }
        const newComment = await Comment.create({
            ...comment,
            post: post.id,
            user: user.id,
        });
        return newComment;
    }

    async getComments(postId) {
        const post = await Post.findByPk({where: {id: postId}});
        if (!post) {
            throw new ApiError('Post not found', 404);

        }
        const comments = await Comment.findAll({
                where: {post: post.id},
            }
        );
        return comments;
    }

    async deleteComment(commentId) {
        const comment = await Comment.findByPk(commentId);
        if (!comment) {
            throw new ApiError('Comment not found', 404);
        }
        await comment.destroy();
    }

}

module.exports = new CommentService();
