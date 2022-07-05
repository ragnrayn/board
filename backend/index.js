const express = require("express");
const mainRouter = require("./src/routes/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbconnection = mongoose.connection;
const app = express();
const username = "peedpeedy";
const password = "arthurBuriak02goodgame";

const PORT = process.env.PORT || 4200;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ma11s.mongodb.net/Boards?retryWrites=true&w=majority`);

dbconnection.on("error", function () {
    console.log("Connection error");
});

dbconnection.once("open", function () {
    console.log("Connect to database");
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use("/", mainRouter);

app.listen(PORT, () => console.log(`Server work in ${PORT} port`));