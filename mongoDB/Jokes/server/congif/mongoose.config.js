const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jokes_db")
.then( () => console.log("Connected to DB"))
.catch( (err) => console.log("Error connecting to DB", err));
