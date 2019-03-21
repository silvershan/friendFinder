//Dependencies 
var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");

//Call the Express application
var app = express();

//Set up the port to run application on
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });