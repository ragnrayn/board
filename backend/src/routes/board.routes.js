const boardRouter = require("express").Router();
const board = require("../controllers/board.js");

boardRouter.get("/get", board.get);


module.exports = boardRouter;
