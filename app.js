const express = require("express");
const dotenv = require("dotenv");

const app = express();
app.use(express.urlencoded({ extended: true }));
dotenv.config();

app.listen(process.env.APP_PORT, (error) => {
  if (error) throw error;
  console.log("running...");
});
