const express = require("express");
const app = express();
const PORT = 5500;


//call db
require("./models/dbconfig");

//call route
const postsRoutes = require("./routes/postsController");

//middleware, here is a fonction to lissen that oruut /
app.use("/", postsRoutes);

//connect to server
app.listen(PORT, () => console.log("Server started on port : " + PORT));
