const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING ||
      "mongodb://localhost/perfAnalytics-1",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  console.log("connected to Mongo");
}

main();
