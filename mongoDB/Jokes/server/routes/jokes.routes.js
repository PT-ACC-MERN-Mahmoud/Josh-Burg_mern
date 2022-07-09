const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.jokeById);
    app.put('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
};
