const express = require("express");
const path = require("path");
const user = express();
const hbs = require("hbs");

require("./db/conn");
const port = process.env.PORT || 3000;

const static_path =path.join(__dirname, "../public");
const template_path =path.join(__dirname, "../template/views");
const partials_path =path.join(__dirname, "../template/partials");
user.use(express.static(static_path));
user.set("view engine","hbs");
user.set("views",template_path);
hbs.registerPartials(partials_path);

user.get("/", (req,res) => {
    res.render("index")
});

user.listen(port,() => {
    console.log('server is running at port no $3000');
})