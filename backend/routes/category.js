const express = require("express");
const router = express.Router();
const upload = require("../multer");
const CategoryService = require("../servers/category-service");

router.get("/all", async (req, res) => {
  const allCategories = await CategoryService.findAll();
  console.log(allCategories);
  res.send(allCategories);
});

router.post("/create", upload.single('categorytImage'),  async (req, res) => {
  const data = {
      title: req.body.title,
      categorytImage: req.file?.path,
      products: []
  }
  await CategoryService.add(data)
  res.send('Got a create request at /user')
});
  
router.put('/update/:id', async (req, res)=> {
  const category = await CategoryService.find(req.params.id)
  const data = req.body
  CategoryService.update(category, data)
  res.send('Got a update request at /user')
})


router.delete('/delete/:id', async (req, res)=> {
  const category = await CategoryService.find(req.params.id)

  const { id } = req.params;
  await CategoryService.del({ _id: id })
  res.send('Got a DELETE request at /user')
})


module.exports = router;