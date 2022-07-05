const boardModel = require("../models/board.model");

async function get(request, response) {
    try {
        const get = await boardModel.find({});
        response.status(201).send({ data: get });
    } catch (error) {
        response.status(404).send(error);
    }
}


async function post(request, response){
    try {
        const create = await boardModel.create({ 
            title: request.body.title,
            price: request.body.price,
            description: request.body.description
         });
        
        response.status(201).send({ data: create });
    } catch (error) {
        response.status(404).send(err);
    }
}


const board = {
    get: get,
    post: post
}

module.exports = board;