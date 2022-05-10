const ApiError = require('../exceptions/api-errors');
const {User, Post} = require('../db/models');

class BlogService {

    async getAllPosts() {
        const posts = await Post.findAll();
        if (!posts) {
            throw new ApiError('No posts found', 404);
        }
        return posts;
    }

    async getPostById(id) {
        const post = await Post.findByPk(id);
        if (!post) {
            throw new ApiError('No post found', 404);
        }
        return post;
    }

    async getPostsByUserId(id) {
        const posts = await Post.findAll({
            where: {userId: id}
        });
        if (!posts) {
            throw new ApiError('No posts found', 404);
        }
        return posts;
    }

    async createPost(post) {
        const user = await User.findByPk(post.userId);
        if (!user) {
            throw new ApiError('No user found', 404);
        }
        const newPost = await Post.create(post);
        return newPost;
    }

    async updatePost(id, post) {
        const updatedPost = await Post.update(post, {
            where: {id: id}
        });
        if (!updatedPost) {
            throw new ApiError('No post found', 404);
        }
        return updatedPost;
    }

    async deletePost(id) {
        const deletedPost = await Post.destroy({
            where: {id: id}
        });
        if (!deletedPost) {
            throw new ApiError('Can`t delete post', 404);
        }
    }

}

module.exports = new BlogService();
