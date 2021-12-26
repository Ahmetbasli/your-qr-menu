require("dotenv").config();
const cors = require("cors");
const websiteRouter = require("./routes/website");
const product = require("./routes/product");
const express = require("express");
require("./mongo-connection");

const app = express();
app.use(cors({
  origin: "*",
}));

app.use(express.json());
app.use("/", express.static("./public"));

app.use("/website", websiteRouter);
app.use("/product", product);

app.get("/", (req, res) => {
  res.render("index.html");
});

module.exports = app;
