const express = require("express");
const movieController = require("./movieController");

const Router = express.Router();

Router.get("/hello", movieController.gethello);

module.exports = Router;
