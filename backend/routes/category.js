const express = require("express");
const router = express.Router();
const upload = require("../multer");
const CategoryService = require("../servers/category-service");

router.get("/find/:id", async (req, res) => {
  const category = await CategoryService.find(req.params.id);
  res.send(category);
});
router.get("/all", async (req, res) => {
  const allCategories = await CategoryService.findAll();
  res.send(allCategories);
});

router.post("/create", upload.single("categoryImage"), async (req, res) => {
  const data = {
    title: req.body.title,
    categoryImage: req.file?.filename,
    categoryImageOriginalName: req.file?.originalname,
    products: [],
  };
  const response = await CategoryService.add(data);
  res.send(response);
});

router.put("/update/:id", upload.single("categoryImage"), async (req, res) => {
  const category = await CategoryService.find(req.params.id);
  const data = {
    title: req.body.title,
    categoryImage:
      req.body.categoryImage === "null" ? null : req.file?.filename,
    categoryImageOriginalName:
      req.body.categoryImage === "null" ? null : req.file?.originalname,
  };

  CategoryService.update(category, data);
  //
  res.send(data);
});

router.delete("/delete/:id", async (req, res) => {
  const category = await CategoryService.find(req.params.id);

  const { id } = req.params;
  await CategoryService.del({ _id: id });
  res.send(category);
});

module.exports = router;
