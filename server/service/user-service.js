const bcrypt = require('bcrypt');
const uuid = require('uuid');
const {User} = require('../db/models');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const fileService = require('./file-service');
const ApiError = require('../exceptions/api-errors');

class UserService {
    async registration(name, email, password) {
        const user = await User.findOne({where: {email}});
        if (user) {
            throw ApiError.badRequestError('User already exists');
        }
        const hash = await bcrypt.hash(password, 7);
        const activationLink = uuid.v4();
        const newUser = await User.create({
            name,
            email,
            password: hash,
            activationLink,
        });
        const userFront = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isActivated: newUser.isActivated,
        };
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        const tokens = await tokenService.generateTokens({...userFront});
        await tokenService.saveToken(newUser, tokens.refreshToken);
        return {...tokens, user: userFront};
    }

    async activate(activationLink) {
        const user = await User.findOne({where: {activationLink}});
        const userFront = {
            id: user.id,
            email: user.email,
            isActivated: user.isActivated,
        };
        if (!user) {
            throw ApiError.badRequestError('User not found');
        }
        if (user.isActivated) {
            throw ApiError.badRequestError('User already activated');
        }
        user.isActivated = true;
        await user.save();
        const tokens = await tokenService.generateTokens({...userFront});
        await tokenService.saveToken(user, tokens.refreshToken);
        return {...tokens, userFront};
    }

    async login(email, password) {
        console.log(email, password);
        const user = await User.findOne({where: {email}});
        const userFront = {
            id: user.id,
            name: user.name,
            email: user.email,
            isActivated: user.isActivated,
        };
        if (!user) {
            throw ApiError.badRequestError('User not found');
        }
        if (!user.isActivated) {
            throw ApiError.badRequestError('User not activated');
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw ApiError.badRequestError('Invalid password');
        }
        const tokens = await tokenService.generateTokens({...userFront});
        await tokenService.saveToken(user, tokens.refreshToken);
        return {...tokens, userFront};
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError(401, 'Refresh token is required');
        }
        const userData = await tokenService.validateRefreshToken(refreshToken);

        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError(401, 'Renew token required');
        }
        const userId = userData.id;
        console.log(userId);
        const user = await User.findOne({where: {id: userId}});
        const userFront = {
            id: user.id,
            email: user.email,
            isActivated: user.isActivated,
        };
        const tokens = await tokenService.generateTokens({...userFront});
        await tokenService.saveToken(user, tokens.refreshToken);
        return {...tokens, userFront};
    }

    async getUsers() {
        const user = await User.findAll();
        if (!user) {
            throw ApiError.badRequestError('Users not found');
        }
        return user;
    }

    async uploadUserAvatar(userId, file) {
        const user = await User.findOne({where: {id: userId}});
        if (!user) {
            throw ApiError.badRequestError('User not found');
        }
        const fileName = await fileService.uploadFile(file);
        user.avatar = fileName;
        await user.save();
        return user;
    }
}

module.exports = new UserService();
