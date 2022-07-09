const mongoose = require("mongoose");

const JokesSchema = mongoose.Schema(
    {
        setup: String,
        punchline: String,
    },
    { timestamp: true }
);

const Joke = mongoose.model("Jokes", JokesSchema);

module.exports = Joke;