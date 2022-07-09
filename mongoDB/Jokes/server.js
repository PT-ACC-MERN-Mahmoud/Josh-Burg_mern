const express = require("express");
const app = express();
const PORT = 8000;

require("./server/congif/mongoose.config");

app.use( express.json() );

const JokeRoute = require("./server/routes/jokes.routes");
JokeRoute(app);

app.listen( PORT, () => console.log(`Running on Port ${PORT}`));