const ApiError = require('../exceptions/api-errors');
const {User, City} = require('../db/models');


class HistoryService {
    async getHistory(userId) {
        const history = await City.findAll();
        if (!history) {
            throw new ApiError('History not found', 404);
        }
        return history;
    }

    async createHistory(userId, city) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new ApiError('User not found', 404);
        }
        const cityExists = await City.create(city);
        return cityExists;
    }

    async deleteHistory(id) {
        const deleteCity = await City.destroy({where: {id: id}});
    }

}

module.exports = new HistoryService();
