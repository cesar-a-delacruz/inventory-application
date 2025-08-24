const express = require("express");
const dotenv = require("dotenv");
const gamesRouter = require("./routes/gamesRouter");
const genresRouter = require("./routes/genresRouter");
const developersRouter = require("./routes/developersRouter");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
dotenv.config();

app.get("/", (req, res) => res.render("home", { title: "Home" }));
app.use("/games", gamesRouter);
app.use("/genres", genresRouter);
app.use("/developers", developersRouter);

app.listen(process.env.APP_PORT, (error) => {
  if (error) throw error;
  console.log("running...");
});
