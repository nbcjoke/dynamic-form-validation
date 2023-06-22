const Router = require("express").Router;
const router = new Router();
const { body } = require("express-validator");

const entityController = require("../controllers/entity-controller");

router.get("/entities", entityController.getEntities);

module.exports = router;
