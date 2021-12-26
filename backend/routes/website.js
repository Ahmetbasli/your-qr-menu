const express = require("express");
const {
  addNewAnalyticsData,
  findOneByOrigin,
} = require("../servers/product-service");
const websiteService = require("../servers/product-service");
const router = express.Router();

router.get("/all", async (req, res) => {
  await websiteService.del("612c1d6a45d522cce9598e88");

  var today = new Date();
  console.log(today);
  const websites = await websiteService.findAll();
  res.send(websites);
});

router.get("/getByUrl", async (req, res) => {
  const url = new URL(req.query.url);
  const website = await websiteService.findOneByOrigin(url.origin);

  if (!website) res.status(404);
  res.send(website);
});

router.post("/", async (req, res) => {
  const { data, origin, url } = req.body;

  const website = await websiteService.findOneByOrigin(origin);

  if (!website)
    await websiteService.add({ analyticsDatas: [data], origin, url });
  else await websiteService.addNewAnalyticsData(website, data);

  res.send(req.body);
});

router.get("/", async (req, res) => {
  //console.log(boolean);
  res.send("fjksjf");
});

module.exports = router;
