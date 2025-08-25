const Controller = require("../classes/Controller");
const model = require("../models/genresModel");
module.exports = new Controller(model, "genres");
