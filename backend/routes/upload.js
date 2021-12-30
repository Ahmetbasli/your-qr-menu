const express = require("express");
const router = express.Router();
const upload = require("../multer");

const mongoose = require("mongoose");
//creating bucket
let bucket;
mongoose.connection.on("connected", () => {
  var client = mongoose.connections[0].client;
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "uploads",
  });
});
router.get("/:filename", (req, res) => {
  const file = bucket
    .find({
      filename: req.params.filename,
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: "no files exist",
        });
      }
      bucket.openDownloadStreamByName(req.params.filename).pipe(res);
    });
});

module.exports = router;
