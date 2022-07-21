const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.authorById);
    app.put('/api/authors/:id', AuthorController.editAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}