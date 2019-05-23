const express = require("express");
const exphbs = require("express-handlebars");
const router = require("./controllers/bills_controller.js")

const app = express();

const port = process.env.port || 3500;

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

app.listen(port, function(){
    console.log(`port listening on port ${port}`)
})


