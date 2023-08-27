const express = require("express");
const path = require("path");
const user = express();
require("./db/conn");
const port = process.env.PORT || 3000;

const static_path =path.join(__dirname, "../public")

user.use(express.static(static_path))

user.get("/", (req,res) => {
    res.send("Welcome To MedAIO")
});

user.listen(port,() => {
    console.log('server is running at port no ${port}');
})