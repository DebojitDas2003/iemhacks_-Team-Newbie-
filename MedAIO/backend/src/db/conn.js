const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/medaio", {         //to host in remote
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log("No connection");
});
