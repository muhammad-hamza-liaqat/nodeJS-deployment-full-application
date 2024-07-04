const express = require("express");
const app = express();
const homeRoutes = express.Router();
const {homePage, menuPage, termsPage} = require("../controller/home.controller");


homeRoutes.get("/", homePage);
homeRoutes.get("/menu", menuPage);
homeRoutes.get("/terms", termsPage);

module.exports = homeRoutes;
