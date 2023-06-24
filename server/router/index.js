const Router = require("express").Router;
const router = new Router();

const entityController = require("../controllers/entity-controller");

router.get("/getEntities", entityController.getEntities);
router.post("/createEntity", entityController.createEntity);
router.put("/changeEntity", entityController.changeEntity);
router.get("/getEntity", entityController.getEntity);

module.exports = router;
