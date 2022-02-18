const mongoose = require("mongoose");
const Category = require("./category");

const BusinessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ownerName: { type: String, required: true },
  phoneNumber: { type: String },
  email: { type: String },
  country: { type: String },
  county: { type: String },
  wifiName: { type: String },
  wifiPassword: { type: String },
  userName: { type: String },
  password: { type: String },
  extraInformations: { type: String },
  businessLogo: { type: String },
  logoOriginalName: { type: String },
  categories: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});

BusinessSchema.plugin(require("mongoose-autopopulate"));

const BusinessModel = mongoose.model("Business", BusinessSchema);

module.exports = BusinessModel;
