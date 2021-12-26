const mongoose = require("mongoose");

const WebsiteSchema = new mongoose.Schema({
  analyticsDatas: [
    /*  {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "AnalyticsData",
    }, */
  ],
  origin: String,
  url: String,
});

const WebsiteModel = mongoose.model("Website", WebsiteSchema);

module.exports = WebsiteModel;
