const express = require("express");
const app = express();

app.use(express.static("./public"));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/login", (req, res) => {
  res.setHeader("content-type", "application/json");
  const result = req.body;
  //   let type = req.header("content-type");
  console.log(result);
  res.json(result); //spit back
});

app.listen(5000, () => {
  console.log("Server spinnig...");
});
