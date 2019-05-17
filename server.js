const express = require('express');
const mongoose = require('mongoose');


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/VueBill";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });


const PORT =  process.env.PORT || 8080;

const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));



app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});
