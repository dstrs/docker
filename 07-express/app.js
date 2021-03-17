const path = require("path");
const express = require("express");
const app = express();
const port = 3500;

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/test", (req, res) => {
  res.send({ text: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
