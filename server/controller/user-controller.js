const { validationResult } = require('express-validator');
const userService = require('../service/user-service');
const { User } = require('../db/models');
const ApiError = require('../exceptions/api-errors');

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.badRequestError('Validation error', errors.array()));
      }
      const { name, email, password } = req.body;
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
      const { email, password } = req.body;
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
      const { refreshToken } = req.cookies;
      await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json({ message: 'Logout success' });
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
      const { refreshToken } = req.cookies;
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

  async getUserProfile(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await userService.getUser(userId);
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async updateUserProfile(req, res, next) {
    try {
      const file = req.file.originalname;
      const userId = req.params.id;
      const { name, email } = req.body;
      await User.update({ name, email, photo: file }, { where: { id: userId } });
      const one = await User.findByPk(Number(userId));
      return res.json(one);
    } catch (err) {
      next(err);
    } 
  }

  async uploadUserAvatar(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
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
