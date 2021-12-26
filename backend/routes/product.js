const express = require("express");
const router = express.Router();
const upload = require("../multer");
const Category = require("../servers/category-service");



router.post("/", upload.single('categorytImage'),  async (req, res) => {
  
    const data = {
        title: req.body.title,
        categorytImage: req.file.path,
        products: [],
    }

    await Category.add(data )
  });
  
  router.get("/", async (req, res) => {
    
  });


module.exports = router;
