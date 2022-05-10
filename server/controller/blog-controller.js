const {User, Post} = require('../db/models');
const ApiError = require('../exceptions/api-errors');
const userService = require('../service/user-service');
const blogService = require('../service/blog-service');

class BlogController {
    async getAllPosts(req, res, next) {
        try {
            // const posts = await blogService.getAllPosts();
            const posts = [
                {
                    id: 1,
                    title: 'Post 1',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
                    imagePost: 'https://picsum.photos/200/300',
                    createdAt: new Date(),
                    updatedAt: new Date(),

                },
                {
                    id: 2,
                    title: 'Post 2',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
                    imagePost: 'https://picsum.photos/200/300',
                    createdAt: new Date(),
                    updatedAt: new Date(),

                },
                {
                    id: 3,
                    title: 'Post 3',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.',
                    imagePost: 'https://picsum.photos/200/300',
                    createdAt: new Date(),
                    updatedAt: new Date(),

                }
            ]
            res.status(200).json(posts);
        } catch (e) {
            next(e);
        }
    }

    async getPostById(req, res, next) {
        try {
            const post = await blogService.getPostById(req.params.id);
            res.status(200).json(post);
        } catch (e) {
            next(e);
        }
    }

    async getPostsByUserId(req, res, next) {
        try {
            const userPosts = await blogService.getPostsByUserId(req.params.id);
            res.status(200).json(userPosts);
        } catch (e) {
            next(e);
        }
    }

    async createPost(req, res, next) {
        try {
            const post = await blogService.createPost(req.body);
            res.status(201).json(post);
        } catch (e) {
            next(e);
        }
    }

    async updatePost(req, res, next) {
        try {
            const post = await blogService.updatePost(req.params.id, req.body);
            res.status(200).json(post);
        } catch (e) {
            next(e);
        }
    }

    async deletePost(req, res, next) {
        try {
            const post = await blogService.deletePost(req.params.id);
            res.status(200).json(post);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new BlogController();
