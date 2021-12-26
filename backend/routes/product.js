const express = require("express");
const router = express.Router();
let fs = require('fs-extra');
const Product = require("../servers/product-service");

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const path = `./public/uploads/`;
        fs.mkdirsSync(path);
        callback(null, path);
      },
      filename: (req, file, callback) => {
        //originalname is the uploaded file's name with extn
        callback(null,`${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}` );
      }
        
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

router.post("/", upload.single('productImage'),  async (req, res) => {
    
  });
  
  router.get("/", async (req, res) => {
    
  });


module.exports = router;
