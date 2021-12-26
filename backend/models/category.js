const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryImage: {type: String},
  title: {type: String, required: true},
  product: [{
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
