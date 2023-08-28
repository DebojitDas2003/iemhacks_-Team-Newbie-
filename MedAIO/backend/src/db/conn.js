const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Debojit:<password>@medaio.inpray3.mongodb.net/", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log("No connection");
});
