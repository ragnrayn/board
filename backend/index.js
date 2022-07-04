const express = require("express");
const mainRouter =  require("./src/routes/index");
const app = express();

const PORT = process.env.PORT || 4200;


app.use("/", mainRouter);

app.listen(PORT, () => console.log(`Server work in ${PORT} port`));