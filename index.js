const MongoClient = require("mongodb").MongoClient;
const connection_string = "mongodb://localhost:27017/";
const express = require("express");
const app = express();

MongoClient.connect(
  connection_string,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) throw error;
    console.log("Connected to mongo db");
    var db = client.db("blog");
    app.get("/books", (req, res) => {
      db.collection("books")
        .find({})
        .toArray((err, data) => {
          if (err) throw err;
          res.send(data);
        });
    });
    app.listen(9000);
  }
);
