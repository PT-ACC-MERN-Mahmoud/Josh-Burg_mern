const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post('/api/products', ProductController.createNewProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.productById);
    app.put('/api/products/:id', ProductController.editProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}