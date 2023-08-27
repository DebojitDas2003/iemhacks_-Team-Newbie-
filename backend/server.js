const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(bodyParser.json());

const mongoUrl = "mongodb://localhost:27017";
const dbName = "user";
const collectionName = "your_collection_name";

app.post("/process_form", (req, res) => {
    const formData = req.body;

    MongoClient.connect(mongoUrl, (err, client) => {
        if (err) throw err;

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        collection.insertOne(formData, (err, result) => {
            if (err) {
                console.error("Error inserting data:", err);
                res.status(500).send("Internal Server Error");
            } else {
                console.log("Data inserted successfully");
                res.json({ message: "Data inserted successfully" });
            }

            client.close();
        });
    });
});

const PORT = 6969;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
