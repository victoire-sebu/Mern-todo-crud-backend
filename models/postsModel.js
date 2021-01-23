const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "backend-node", //name of database
  {
    author: {
      typpe: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts" //name of table
);

module.exports = { PostsModel }; //that is for export model where will need to call it on the app
