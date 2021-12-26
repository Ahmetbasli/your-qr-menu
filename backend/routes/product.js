const express = require("express");
const { find } = require("../models/product");
const router = express.Router();
const upload = require("../multer");
const ProductService = require("../servers/product-service");
const CategoryService = require("../servers/category-service");


  
router.post("/create/:categoryId", upload.single('productImage'),  async (req, res) => {
    const data = {
        producttImage: req.file?.path,
        title: req.body.title,
        description: req.body.description,
        productPrice: req.body.price
    }
    const newProduct = await ProductService.add(data)
    
    const category = await CategoryService.find({_id: req.params.categoryId})
    await ProductService.addNewProductToaCategory(category,newProduct)
    res.send('Got a create request at /user')
});

router.put('/update/:id', async (req, res)=> {
    const product = await ProductService.find(req.params.id)
    const data = req.body
    console.log(product);
    console.log(data);

    ProductService.update(product, data)
    res.send('Got a update request at /user')
})


router.delete('/delete/:id', async (req, res)=> {
const { id } = req.params;
await ProductService.del({ _id: id })
res.send('Got a DELETE request at /user')
})

module.exports = router;
