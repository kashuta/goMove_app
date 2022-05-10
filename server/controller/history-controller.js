const historyService = require('../service/history-service');

class HistoryController {
  async getAllHistory(req, res, next) {
    try {
      const history = await historyService.getHistory(req.params.id);
      res.status(200).json(history);
    } catch (e) {
      next(e);
    }
  }

  async createHistory(req, res, next) {
    try {
      const history = await historyService.createHistory(req.body);
      res.status(201).json(history);
    } catch (e) {
      next(e);
    }
  }

  async deleteHistory(req, res, next) {
    try {
      const history = await historyService.deleteHistory(req.params.id);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new HistoryController();
