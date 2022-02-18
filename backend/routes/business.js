const express = require("express");
const router = express.Router();
const upload = require("../multer");
const BusinessService = require("../servers/Business-service");

router.post("/create", upload.single("businessLogo"), async (req, res) => {
  console.log("crating");
  const businessData = req.body;
  const data = {
    name: businessData.name,
    ownerName: businessData.ownerName,
    phoneNumber: businessData.phoneNumber,
    email: businessData.email,
    country: businessData.country,
    county: businessData.county,
    wifiName: businessData.wifiName,
    wifiPassword: businessData.wifiPassword,
    userName: businessData.userName,
    password: businessData.password,
    extraInformations: businessData.extraInformations,
    businessLogo: req.file?.filename,
    logoOriginalName: req.file?.originalname,
    categories: [],
  };
  const response = await BusinessService.add(data);
  response.password = null;
  res.send(response);
});

router.get("/find/:id", async (req, res) => {
  const Business = await BusinessService.find(req.params.id);
  Business.password = null;
  console.log(Business);

  res.send(Business);
});

router.get("/all", async (req, res) => {
  const allBusinesses = await BusinessService.findAll();

  const businessesWithoutPassword = allBusinesses.map((business) => {
    business.password = null;
    return business;
  });
  res.send(businessesWithoutPassword.reverse());
});

// router.checkIfPasswordCorrect
// router.put("/update/:id", upload.single("BusinessImage"), async (req, res) => {
//   const Business = await BusinessService.find(req.params.id);
//   const data = {
//     title: req.body.title,
//     BusinessImage:
//       req.body.BusinessImage === "null" ? null : req.file?.filename,
//     BusinessImageOriginalName:
//       req.body.BusinessImage === "null" ? null : req.file?.originalname,
//   };

//   BusinessService.update(Business, data);
//   //
//   res.send(data);
// });
router.post("/chekIfPasswordValid/:id", async (req, res) => {
  const Business = await BusinessService.find(req.params.id);

  if (Business.userName !== req.body.userName) {
    res.send("0");
    return;
  }
  if (Business.password !== req.body.password) {
    res.send("1");

    return;
  }

  res.send("2");
});
router.delete("/delete/:id", async (req, res) => {
  const Business = await BusinessService.find(req.params.id);

  const { id } = req.params;
  await BusinessService.del({ _id: id });
  res.send(Business);
});

module.exports = router;
