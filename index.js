const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const connectDB = require("./server");


const commentsRoutes = require('./routes/commentsRoutes');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});


app.use('/comments', commentsRoutes);


connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});



// index.js -> routes -> controllers -> services -> models.