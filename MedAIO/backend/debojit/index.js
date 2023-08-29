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

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});

const User = mongoose.model('User',userSchema);

mongoose.connect('mongodb+srv://Debojit:raja1234@medaio.inpray3.mongodb.net/',{
useNewUrlParser: true,
useUnifiedTopology:true
});

var db = mongoose.connection;

db.on("error", () => console.log("Error Connecting to database"));
db.once("open", () => console.log("Connected to Databse"));

app.post("/signup", async(req, res) => {
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

  try {
    await User.create(data);
    console.log("Signup successful. Login to enter");
    return res.redirect("login.html");
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).send("Error during signup");
  }
});



app
  .get("/", (req, res) => {
    res.set({
      "Allow-access-Allow-origin": "*",
    });
  })
  .listen(3000);

console.log("Listening");
