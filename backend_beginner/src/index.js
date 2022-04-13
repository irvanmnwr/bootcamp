// import
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const bodyParser = require("body-parser");
const routerNav = require("./routes");
// const { request, response } = require("express");

const app = express();
const port = 3001;

// midleware
app.use("/", routerNav);
app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());
app.use(helmet()); // security
app.use(xss());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Express app is listen on port ${port} !`);
});
