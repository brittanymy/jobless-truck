// dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// port
const PORT = process.env.PORT || 3001;
const MONGODB_URI_1 = process.env.MONGODB_URI || "mongodb://localhost/budget";

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
console.log(MONGODB_URI_1)
// mongoose
mongoose.connect(MONGODB_URI_1, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.use("*",(req,res)=>{
  res.sendFile(path.join(__dirname, "public/index.html"));
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});