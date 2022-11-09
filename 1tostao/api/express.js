const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes.js");

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.use(routes);

app.listen(3030, () => {
  console.log("Running...");
});
