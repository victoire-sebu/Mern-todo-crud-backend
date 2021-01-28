const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "todos", //name of database
  {
    todo_description: {
      type: String,
    },
    todo_responsible: {
      type: String,
    },
    todo_priority: {
      type: String,
    },
    todo_completed: {
      type: Boolean,
    },
  },
  "todos" //name of table
);

module.exports = { PostsModel }; //that is for export model where will need to call it on the app
