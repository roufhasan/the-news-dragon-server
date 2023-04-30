const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon is Running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Dragon API running on port ${port}`);
});
