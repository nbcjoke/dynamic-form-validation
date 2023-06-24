const Router = require("express").Router;
const router = new Router();

const entityController = require("../controllers/entity-controller");

router.get("/getEntities", entityController.getEntities);
router.post("/createEntity", entityController.createEntity);

module.exports = router;
