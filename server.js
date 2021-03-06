// Dependencies
require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// Database of Turtles
const turtles = [
  { name: "Leonardo", role: "ninja "},
  { name: "Michaelangelo", role: "ninja "},
  { name: "Donatello", role: "ninja" },
  { name: "Raphael", role: "ninja" },
  { name: "Franklin", role: "student" },
  { name: "Master Oogway", role: "Sensei" },
  { name: "Crush", role: "Nemo's Ride" },
  { name: "Koopa Troopa", role: "Mario's Foe" },
  { name: "Bowser", role: "King of turtles"},
  { name: "Squirtle", role: "1st Gen Starter"}
];

// ---------------------- // 
// Middleware
// ---------------------- // 
app.use(express.json());

// Mongoose Config
const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect(DATABASE_URL);

// check for DB connection and errors
db.on("connected", () => {
	console.log("MongoDB Connected!")
})
db.on("disconnected", () => {
	console.log("MongoDB Disconnected!")
})
db.on("error", (err) => {
	console.log(err.message)
})

// Routes 
app.get('/', (req, res) => {
  res.json({ response: `Ayoooo`});
});

// ---------------------- // 
// INDUCES
// ---------------------- // 
// Index
app.get('/turtles/', (req, res) => {
  res.json(turtles);
});

// Delete
app.delete("/turtles/:id/", (req, res) => {
  turtles.splice(req.params.id, 1);
  res.json(turtles);
});

// Update
app.put("/turtles/:id/", (req, res) => {
  turtles[req.params.id] = req.body;
  res.json(turtles);
});

// Create 
app.post('/turtles', (req, res) => {
  // add the turtle to the array
  turtles.push(req.body);
  // send the turtles object to show user the change
  res.json(turtles);
});

// Show
app.get('/turtles/:id/', (req, res) => {
  res.json(turtles[req.params.id]);
});

// Listener
app.listen(PORT, () => {
  console.log(`We are running on port ${PORT}`);
});


