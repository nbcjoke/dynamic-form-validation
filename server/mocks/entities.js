const { v4: uuid } = require("uuid");

const entities = [
  {
    id: uuid(),
    nameOfCompany: "Itransition",
    adress: "bla bla bla",
    phone: "375 44 111 11 11",
    country: "BY",
    typeOfCompany: "grocery",
    products: [
      {
        name: "1",
        statusOfProject: "completed",
      },
      {
        name: "2",
        statusOfProject: "completed",
      },
      {
        name: "3",
        statusOfProject: "completed",
      },
    ],
    description: "hello",
    amountOfMoney: "1000-10000$",
  },
  {
    id: uuid(),
    nameOfCompany: "Itransition",
    adress: "bla bla bla",
    phone: "375 44 111 11 11",
    country: "BY",
    typeOfCompany: "grocery",
    products: [
      {
        name: "1",
        statusOfProject: "completed",
      },
      {
        name: "2",
        statusOfProject: "completed",
      },
      {
        name: "3",
        statusOfProject: "completed",
      },
    ],
    description: "hello",
    amountOfMoney: "1000-10000$",
  },
  {
    id: uuid(),
    nameOfCompany: "Itransition",
    adress: "bla bla bla",
    phone: "375 44 111 11 11",
    country: "BY",
    typeOfCompany: "grocery",
    products: [
      {
        name: "1",
        statusOfProject: "completed",
      },
      {
        name: "2",
        statusOfProject: "completed",
      },
      {
        name: "3",
        statusOfProject: "completed",
      },
    ],
    description: "hello",
    amountOfMoney: "1000-10000$",
  },
];

module.exports = entities;
