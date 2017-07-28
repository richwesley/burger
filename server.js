const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const exphbs = require("express-handlebars");

var port = process.env.PORT || CONFIG.port;

app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(port);
