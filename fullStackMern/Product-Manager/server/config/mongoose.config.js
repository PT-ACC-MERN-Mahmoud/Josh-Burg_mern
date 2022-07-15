const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log('Connected to products') )
.catch( (err) => console.log("Error connecting to DB", err) );