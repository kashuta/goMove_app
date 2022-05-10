const ApiError = require('../exceptions/api-errors');
const { User, City } = require('../db/models');

class HistoryService {
  async getHistory(userId) {
    const history = await City.findAll();
    if (!history) {
      throw new ApiError('History not found', 404);
    }
    return history;
  }

  async createHistory(object) {
    const user = await User.findByPk(object.userId.id);
    if (!user) {
      throw new ApiError('User not found', 404);
    }
    const cityExists = await City.create({ cityBegin: object.cityBegin, cityEnd: object.cityEnd, userId: object.userId.id });
    return cityExists;
  }

  async deleteHistory(id) {
    const deleteCity = await City.destroy({ where: { id } });
  }
}

module.exports = new HistoryService();
