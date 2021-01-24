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
router.post("/", (req, res) => {
  const newReccord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });

  newReccord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to creating new data: " + err);
  });
});

//update emlements
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error: " + err);
    }
  );
});

//delete
router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

  PostsModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error: " + err);
  });
});

module.exports = router;
