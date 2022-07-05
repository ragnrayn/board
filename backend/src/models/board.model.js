const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const boardShema = new Schema({
    title: String,
    price: Number,
    description: String,
})

const boardModel = mongoose.model("boards", boardShema);


module.exports = boardModel; 