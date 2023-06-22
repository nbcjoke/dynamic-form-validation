const entities = [];
class UserController {
  async getEntities(req, res, next) {
    try {
      return res.json(entities);
    } catch (err) {
      next(err);
    }
  }

  async addEntity(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }

  async changeEntity(req, res, next) {
    try {
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
