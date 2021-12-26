const BaseService = require("./base-service");
const CategoryModel = require("../models/category");

class CategoryService extends BaseService {
  model = CategoryModel;

  async update(category, data) {
      category.title = data.title
      category.categoryImage = data.categoryImage || null
      await category.save()
  }


}

module.exports = new CategoryService();
