const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

const dsaRouter = require("./routes/dsa");

app.use("/dsa", dsaRouter);

app.get("/ping", (req, res) => {
  res.send("<h1>Hello 100</h1>");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@atlascluster.gbkabor.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=AtlasCluster`
  )
  .then(() => {
    app.listen(process.env.PORT);
  });
