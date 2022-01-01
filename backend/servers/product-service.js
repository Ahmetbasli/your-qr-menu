const BaseService = require("./base-service");
const ProductModel = require("../models/product");

class ProductService extends BaseService {
  model = ProductModel;

  async update(product, data) {
    product.title = data.title;
    product.description = data?.description || null;
    product.productPrice = data?.productPrice || null;

    // id undefined do nothing
    if (data.productImage === null) product.productImage = null;
    if (data.productImage) product.productImage = data.productImage;

    if (data.productImageOriginalName === null)
      product.productImageOriginalName = null;
    if (data.productImageOriginalName)
      product.productImageOriginalName = data.productImageOriginalName;

    await product.save();
  }

  async addNewProductToaCategory(category, product) {
    category.products.push(product);
    await category.save();
  }
}

module.exports = new ProductService();
