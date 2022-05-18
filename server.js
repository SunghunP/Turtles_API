// Dependencies
const express = require('express');
const app = express();
const PORT = 3000;

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

// Routes 
app.get('/', (req,res) => {
  res.json({ response: `Ayoooo`})
});

// INDUCES

// Listener
app.listen(PORT, () => {
  console.log(`We are running on port ${PORT}`)
});


