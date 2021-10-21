const express = require("express");
const app = express();
const port = 3000;

const homePage = require("./routes/index.js");
const aboutPage = require("./routes/about.js");

app.use(express.static("public"));

app.use("/about", aboutPage);
app.use("/", homePage);

app.listen(port, () => {
  console.log(`App Listening on Port ${port}`);
});
