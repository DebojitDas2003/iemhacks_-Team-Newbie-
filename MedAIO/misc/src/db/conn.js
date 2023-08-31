const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect("mongodb://localhost:27017/medaio", {         //to host in remote
=======
mongoose.connect("mongodb+srv://Debojit:<password>@medaio.inpray3.mongodb.net/", {
>>>>>>> cb527e13f87ae4306d094ee7e66a71a52d875aad
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log("No connection");
});
