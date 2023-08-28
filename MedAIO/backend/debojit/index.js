var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect('mongodb+srv://Debojit:raja1234@medaio.inpray3.mongodb.net/doctor',{
useNewUrlParser: true,
useUnifiedTopology:true
});

var db = mongoose.connection;

db.on("error", () => console.log("Error Connecting to database"));
db.once("open", () => console.log("Connected to Databse"));

app.post("/signup", (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;

  var data = {
    name: name,
    email: email,
    phone: phone,
    password: password,
  };

  db.collection("users").insertOne(data, (err, collection) => {
    if (err) {
      throw err;
    }
    console.log("Login to enter");
    return res.redirect("login.html");
  });
});



app
  .get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-origin": "*",
    });
  })
  .listen(3000);

console.log("Listening");
