const Joke = require("../models/jokes.model");

const createNewJoke = ( req,res) => {
    const { body } = req;
    Joke.create(body)
    .then( (newJoke) => res.json(newJoke))
    .catch( (err) => console.log("Error", err));
};

const getAllJokes = ( req,res ) => {
    Joke.find({})
    .then((allJokes) => res.json(allJokes))
    .catch( (err) => console.log("Get All Error", err));
};

const jokeById = ( req,res ) => {
    Joke.findById(req.params.id)
    .then( (joke) => res.json(joke))
    .catch( (err) => console.log("ID Search Error", err));
};

const updateJoke = ( req,res ) => {
    const { params } = req;
    Joke.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => console.log("Update Error", err));
    };

    const deleteJoke = ( req,res) => {
        Joke.deleteOne({_id:req.params.id})
        .then((result) => res.json(result))
        .catch((err) => console.log("Delete Error", err));
    };

module.exports = {
    createNewJoke,
    getAllJokes,
    jokeById,
    updateJoke,
    deleteJoke,
};