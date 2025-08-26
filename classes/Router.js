const router = require("express").Router;
module.exports = class Router extends router {
  constructor(controller) {
    super();
    this.get("/", controller.index);
    this.get("/new", controller.new);
    this.get("/:id", controller.show);
    this.get("/:id/edit", controller.edit);
    this.post("/new", controller.create);
    this.post("/:id", controller.update);
    this.post("/:id/delete", controller.delete);
  }
};
