const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId; //help to have an id of object
const { PostsModel } = require("../models/postsModel");

//retrieve element
router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    //send data to web page
    else console.log("Error to get data");
  });
});

//add element
router.post("/add", (req, res) => {
  const newReccord = new PostsModel({
    // author: req.body.author,
    // message: req.body.message,
    todo_description: req.body.todo_description,
    todo_responsible: req.body.todo_responsible,
    todo_priority: req.body.todo_priority,
    todo_completed: req.body.todo_completed,
  });

  newReccord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to creating new data: " + err);
  });
});

//find by ID
router.get("/:id", (req, res) => {
  let id = req.params.id;
  PostsModel.findById(id, function (err, docs) {
    res.json(docs);
  });
});

//update emlements
router.route("/update/:id").post(function (req, res) {
  PostsModel.findById(req.params.id, function (err, docs) {
    if (!docs) {
      res.status(400).send("ID unknow : " + req.params.id);
    } else {
      docs.todo_description = req.body.todo_description;
      docs.todo_responsible = req.body.todo_responsible;
      docs.todo_priority = req.body.todo_priority;
      docs.todo_completed = req.body.todo_completed;

      docs
        .save()
        .then((docs) => {
          res.json("Todo Updated");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
});

//delete
router.delete("/delete/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  PostsModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error: " + err);
  });
});

module.exports = router;
