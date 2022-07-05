const boardRouter = require("express").Router();
const board = require("../controllers/board.js");

boardRouter.get("/get", board.get);
boardRouter.post("/post", board.post);


module.exports = boardRouter;
