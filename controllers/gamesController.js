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

module.exports = controller;
