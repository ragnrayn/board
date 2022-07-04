function get(request, response) {
    console.log("All is work");
    response.send({ message: "All is work" });
}



const board = {
    get: get
}

module.exports = board;