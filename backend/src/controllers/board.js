const boardModel = require("../models/board.model");

async function get(request, response) {
    try {
        const create = await boardModel.create({ title: "For test", price: 5000, description: "For test" });
        response.status(201).send({ data: create });
    } catch (error) {
        response.status(404).send(error);
    }
}



const board = {
    get: get
}

module.exports = board;