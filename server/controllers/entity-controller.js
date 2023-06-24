const { v4: uuid } = require("uuid");

const entities = require("../mocks/entities");

class EntityController {
  async getEntities(req, res, next) {
    try {
      return res.json(entities);
    } catch (err) {
      next(err);
    }
  }

  async createEntity(req, res, next) {
    try {
      const entity = { id: uuid(), ...req.body };
      entities.push(entity);

      return res.json(entity);
    } catch (err) {
      next(err);
    }
  }

  async changeEntity(req, res, next) {
    try {
      const entity = req.body;

      const index = entities.findIndex(({ id }) => id === entity.id);

      if (index >= 0) {
        entities.splice(index, 1, { ...entities[index], ...entity });
      }

      return res.json(entity);
    } catch (err) {
      next(err);
    }
  }

  async getEntity(req, res, next) {
    try {
      const { entityId } = req.query;

      const entity = entities.find((item) => item.id === entityId);
      return res.json(entity);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new EntityController();
