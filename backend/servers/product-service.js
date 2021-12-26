const BaseService = require("./base-service");
const WebsiteModel = require("../models/product");

class WebsiteService extends BaseService {
  model = WebsiteModel;


  async addNewAnalyticsData(website, data) {
    console.dir(this);
    website.analyticsDatas.push(data);
    await website.save();
  }
}

module.exports = new WebsiteService();
