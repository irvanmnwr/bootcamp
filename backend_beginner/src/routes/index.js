const express = require("express");

const Router = express.Router();

const movieRoutes = require("../modules/movie/movieController");

Router.use("/movie", movieRoutes);
module.exports = Router;
