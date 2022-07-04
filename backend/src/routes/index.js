const express = require("express");
const mainRouter = express.Router();
const boardRouter = require("./board.routes");
const allRoutes = [ boardRouter ];

mainRouter.use("/board", allRoutes);


module.exports = mainRouter;