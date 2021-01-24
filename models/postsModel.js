const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "backend-node", //name of database
  {
    author: {
      typpe: String,
      
    },
    message: {
      type: String,
      
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts" //name of table
);

module.exports = { PostsModel }; //that is for export model where will need to call it on the app
