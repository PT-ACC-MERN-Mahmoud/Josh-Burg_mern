const Author = require("../models/author.model");

const createNewAuthor = ( req,res ) => {
    Author.create(req.body)
    .then( (newAuthor) => { res.json({ newAuthor }) })
    .catch( (err) => { res.staus(400).json( {err}) });
};

const getAllAuthors = ( req,res ) => {
    Author.find( {} )
    .then( (allAuthors) => res.json(allAuthors) )
    .catch( (err) => { res.staus(400).json( {err}) });
};

const authorById = ( req,res ) => {
    Author.findById( req.params.id)
    .then( (author) => res.json(author) )
    .catch( (err) => { res.staus(400).json( {err}) });
};

const editAuthor = ( req,res ) => {
    const { params } = req;
    Author.findOneAndUpdate( req.params.id, req.body , {
        new: true,
        runValidators: true,
    })
    .then( (updateAuthor) => res.json(updateAuthor) )
    .catch( (err) => { res.staus(400).json( {err}) });
};

const deleteAuthor = ( req,res ) => {
    Author.deleteOne( {_id:req.params.id} )
    .then( (result) => res.json(result) )
    .catch( (err) => console.log("Error Deleting Author", err) );
};

module.exports = {
    createNewAuthor,
    getAllAuthors,
    authorById,
    editAuthor,
    deleteAuthor,
};



