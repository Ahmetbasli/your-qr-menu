const BaseService = require("./base-service");
const ProductModel = require("../models/product");

class ProductService extends BaseService {
  model = ProductModel;
  
  async addNewProduct(category, product) {
    category.products.push(product)
    await category.save()
  }
}

module.exports = new ProductService();
