const mongoose = require("mongoose");
const Product = require('./product');

const CategorySchema = new mongoose.Schema({
  categoryImage: {type: String},
  title: {type: String, required: true},
  products: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Product',
    autopopulate: {
        maxDepth: 1
    }
}]
});

CategorySchema.plugin(require('mongoose-autopopulate'))

const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
