const { v4: uuid } = require("uuid");

const entities = [
  {
    id: uuid(),
    nameOfCompany: "Itransition",
    adress: "bla bla bla",
    phone: "375 44 111 11 11",
    country: "Belarus",
    typeOfCompany: "grocery",
    choise: "1",
    products: [
      {
        id: uuid(),
        name: "1",
      },
      {
        id: uuid(),
        name: "2",
      },
      {
        id: uuid(),
        name: "3",
      },
    ],
  },
  {
    id: uuid(),
    nameOfCompany: "Itransition",
    adress: "bla bla bla",
    phone: "375 44 111 11 11",
    country: "Belarus",
    typeOfCompany: "grocery",
    choise: "1",
    products: [
      {
        id: uuid(),
        name: "1",
      },
      {
        id: uuid(),
        name: "2",
      },
      {
        id: uuid(),
        name: "3",
      },
    ],
  },
  {
    id: uuid(),
    nameOfCompany: "Itransition",
    adress: "bla bla bla",
    phone: "375 44 111 11 11",
    country: "Belarus",
    typeOfCompany: "grocery",
    choise: "1",
    products: [
      {
        id: uuid(),
        name: "1",
      },
      {
        id: uuid(),
        name: "2",
      },
      {
        id: uuid(),
        name: "3",
      },
    ],
  },
];
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
      const {
        nameOfCompany,
        adress,
        phone,
        country,
        typeOfCompany,
        products,
        description,
        amountOfMpney,
      } = req.body;

      const entity = {
        id: uuid(),
        nameOfCompany,
        adress,
        phone,
        country,
        typeOfCompany,
        products,
        description,
        amountOfMpney,
      };
      entities.push(entity);

      return res.json(entity);
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

module.exports = new EntityController();
