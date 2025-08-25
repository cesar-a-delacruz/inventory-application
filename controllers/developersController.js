const Controller = require("../classes/Controller");
const model = require("../models/developersModel");
module.exports = new Controller(model, "developers");
