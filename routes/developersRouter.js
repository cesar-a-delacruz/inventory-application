const controller = require("../controllers/developersController");
const { Router } = require("express");
const router = Router();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.get("/new", controller.new);
router.get("/:id/edit", controller.edit);
router.post("/new", controller.create);
router.post("/:id", controller.update);
router.post("/:id/delete", controller.delete);

module.exports = router;
