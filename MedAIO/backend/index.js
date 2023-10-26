const express = require('express');
const app = express();
const PORT = 3000;

app.get('/testServer', (req, res) => {
    res.status(200).send("ok"); // Sending a response with status code 200
});

app.get('/', (req, res) => {
    res.status(200).send("Ok"); // Sending a response with status code 200
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
