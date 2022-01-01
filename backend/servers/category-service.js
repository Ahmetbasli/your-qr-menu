const BaseService = require("./base-service");
const CategoryModel = require("../models/category");

class CategoryService extends BaseService {
  model = CategoryModel;

  async update(category, data) {
    category.title = data.title;
    // id undefined do nothing
    if (data.categoryImage === null) category.categoryImage = null;
    if (data.categoryImage) category.categoryImage = data.categoryImage;

    if (data.categoryImageOriginalName === null)
      category.categoryImageOriginalName = null;
    if (data.categoryImageOriginalName)
      category.categoryImageOriginalName = data.categoryImageOriginalName;

    await category.save();
  }
}

module.exports = new CategoryService();
