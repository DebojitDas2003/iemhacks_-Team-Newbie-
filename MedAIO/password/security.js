const express = require("express");
const path = require("path");
const express = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const Register = require("./register");

require("./src/db/conn");
const Register = require("./model/registers");
const { require } = require("express");
const { log } = require(console);

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "''/public");
const template_path = path.join(_dirname,"../templates/views" );
const participate_path = path.join(_dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extented:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");








//login check

app.post("/login", async(req,res) =>{
    try{

        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Register.findOne({email:email});

        const isMatch = await bcrypt.compare(password, useremail.password);

        if(isMatch){
            res.status(201).render("index");
        }
        else{
            res.send("invalid Password Details");
        }
        
    } catch(error){
        res.status(400).send("invalid login details");
    }
})
