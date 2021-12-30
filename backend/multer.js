let fs = require("fs-extra");
const multer = require("multer");
const crypto = require("crypto");
const { GridFsStorage } = require("multer-gridfs-storage");
const path = require("path");
const mongoose = require("mongoose");

const url =
  process.env.MONGODB_CONNECTION_STRING ||
  "mongodb://localhost/perfAnalytics-1";
// Create a storage object with a given configuration
const storage = new GridFsStorage({
  url: url,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

// Set multer storage engine to the newly created object
const upload = multer({ storage });

module.exports = upload;
