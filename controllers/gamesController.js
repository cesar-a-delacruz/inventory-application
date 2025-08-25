const Controller = require("../classes/Controller");
const model = require("../models/gamesModel");
module.exports = new Controller(model, "games");
