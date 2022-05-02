const {validationResult} = require('express-validator');
const userService = require('../service/user-service');
const ApiError = require('../exceptions/api-errors');

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequestError('Validation error', errors.array()));
            }
            const {name, email, password} = req.body;
            const userData = await userService.registration(name, email, password);
            res.cookie('refreshToken', userData.refreshToken, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30,
            });
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30,
            });
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json({message: 'Logout success'});
        } catch (err) {
            next(err);
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect('http://localhost:3000/');
        } catch (err) {
            next(err);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30,
            });
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers();
            return res.json(users);
        } catch (err) {
            next(err);
        }
    }

    async uploadUserAvatar(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.uploadUserAvatar(refreshToken, req.file);
            res.cookie('refreshToken', userData.refreshToken, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30,
            });
            return res.json(userData);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new UserController();
