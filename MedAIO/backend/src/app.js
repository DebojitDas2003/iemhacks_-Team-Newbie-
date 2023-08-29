const express = require("express");
require("../src/db/conn");

const PeopleInfo = require("../src/models/people")
const DoctorInfo = require("../src/models/doc")
const PharmaInfo = require("../src/models/pharma")


const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {        //route pass
    res.send("Hello");
});

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
});


