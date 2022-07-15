const Product = require("../models/product.model");

const createNewProduct = ( req,res) => {
    Product.create(req.body)
    .then( (newProduct) => res.json(newProduct) )
    .catch( (err) => console.log("Error", err));
};

const getAllProducts = ( req,res ) => {
    Product.find({})
    .then((allProducts) => res.json(allProducts))
    .catch( (err) => console.log("Get All Error", err));
};

const productById = ( req,res ) => {
    Product.findById(req.params.id)
    .then( (product) => res.json(product))
    .catch( (err) => console.log("ID Search Error", err));
};

const editProduct = ( req,res ) => {
    const { params } = req;
    Product.findOneAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProduct) => res.json(updatedProduct))
        .catch((err) => console.log("Update Error", err));
    };

const deleteProduct = ( req,res ) => {
    Product.deleteOne( { _id:req.params.id } )
    .then((result) => res.json(result))
    .catch((err) => console.log("Delete Error", err));
};

module.exports = {
    createNewProduct,
    getAllProducts,
    productById,
    editProduct,
    deleteProduct,
};

