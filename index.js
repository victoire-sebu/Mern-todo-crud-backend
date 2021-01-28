const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("useFindAndModify", false);

//call db
require("./models/dbconfig");

//call route
const postsRoutes = require("./routes/postsController");

//middleware

app.use(bodyParser.json()); //past element in json
app.use(cors());
app.use("/todos", postsRoutes); //for fech elements in db

//connect to server
app.listen(PORT, () => console.log("Server started on port : " + PORT));
