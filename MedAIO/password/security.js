const express = require("express");
const path = require("path");
const express = express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const Register = require("./register");

require("./db/conn");








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
