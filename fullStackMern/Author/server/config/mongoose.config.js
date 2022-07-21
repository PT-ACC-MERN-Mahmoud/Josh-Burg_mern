const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log('Connected to authors') )
.catch( (err) => console.log("Error Connecting to DB", err) );