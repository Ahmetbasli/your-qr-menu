const mongoose = require("mongoose");

const AnalyticsDataSchema = new mongoose.Schema({
  
  title:String
});

const AnalyticsDataModel = mongoose.model("AnalyticsData", AnalyticsDataSchema);

module.exports = AnalyticsDataModel;
