const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productImage: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  productPrice: { type: String },
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
