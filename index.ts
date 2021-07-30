const express = require("express");

const app = express();
const port = 4000;

app.get("/auth", (req, res) => {
  res.send("Well done!");
});

app.get("/api", (req, res) => {
  res.send("Well done!");
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
