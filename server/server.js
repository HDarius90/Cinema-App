const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Movie = require('./models/movie');

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Change '*' to the specific origin of your React app in production.
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/cinemaapp');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



app.get("/api", async (req, res) => {
    const currentMovie = await Movie.findOne({ filmTitle: 'Star Wars' })
    res.json({ currentMovie })
})

app.listen(5000, () => { console.log("Server started on port 5000") })
