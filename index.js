const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = process.env.PORT || 3000;

//add path to the public folder
app.use(express.static("./public"));
app.set("view engine", "hbs");

app.set("views", "./public/templates");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
