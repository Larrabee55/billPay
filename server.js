var express = require("express");

var app = express();

var PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});