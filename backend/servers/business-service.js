const BaseService = require("./base-service");
const BusinessModel = require("../models/business");

class BusinessService extends BaseService {
  model = BusinessModel;
}

module.exports = new BusinessService();
