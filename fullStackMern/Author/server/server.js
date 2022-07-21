const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

app.use(cors());

require("./config/mongoose.config");
require("./routes/author.routes")(app);


app.listen( PORT, () => console.log(`Running on Port ${PORT}`));