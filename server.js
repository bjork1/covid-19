//Adding below
require("dotenv").config();
var db = require("./models");

//Adding above

// Pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the 'public' directory
//app.use(express.static("app/public"));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Set Handlebars as the view engine
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Import routes and give the server access to them
var routes = require("./controllers/covid19_controller.js");
//Adding below
var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
//Adding above
//Adding below
db.sequelize.sync(syncOptions).then(function() {
  //Adding above

  app.listen(PORT, function() {
    console.log("app listening on: http://localhost: " + PORT);
  });
});
module.exports = app;
