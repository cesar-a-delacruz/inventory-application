const Controller = require("../classes/Controller");
const model = require("../models/gamesModel");
const modelGenres = require("../models/genresModel");
const modelDevelopers = require("../models/developersModel");

const controller = new Controller(model, "games");
controller.new = async function (req, res) {
  const genres = await modelGenres.findAll();
  const developers = await modelDevelopers.findAll();
  res.render(`games/new`, { title: "games", genres, developers });
};
controller.show = async function (req, res) {
  const item = await model.find(req.params.id);
  const genres = await modelGenres.findByGame(req.params.id);
  const developers = await modelDevelopers.findByGame(req.params.id);
  res.render(`games/show`, { title: "games", item, genres, developers });
};
module.exports = controller;
