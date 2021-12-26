const express = require("express");
const router = express.Router();
var path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    dest: 'uploads/' 
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.post("/", upload.single('img'),  async (req, res) => {
   console.log(req.file)
  });
  
  router.get("/", async (req, res) => {
    
  });


module.exports = router;
