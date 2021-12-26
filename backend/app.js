require("dotenv").config();
const cors = require("cors");
const categoryRouter = require("./routes/category");
const productRouter  = require("./routes/product");
const express = require("express");
require("./mongo-connection");

const app = express();
app.use(cors({
  origin: "*",
}));

app.use(express.json());
app.use("/", express.static("./public"));

app.use("/category", categoryRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.render("index.html");
});



module.exports = app;
