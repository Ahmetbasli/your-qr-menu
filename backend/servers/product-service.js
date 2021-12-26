const BaseService = require("./base-service");
const ProductModel = require("../models/product");

class ProductService extends BaseService {
  model = ProductModel;

  async update(product, data) {
    product.title = data.title
    product.description = data?.description || null
    product.productPrice = data?.productPrice || null
    product.productImage = data?.productImage || null
    await product.save()
}

  async addNewProductToaCategory(category, product) {
    category.products.push(product)
    await category.save()
  }
}

module.exports = new ProductService();
