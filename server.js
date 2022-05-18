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

// ---------------------- // 
// Middleware
// ---------------------- // 
app.use(express.json());

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

// Show
app.get('/turtles/:id/', (req, res) => {
  res.json(turtles[req.params.id]);
});

// Create 
app.post('/turtles', (req, res) => {
  // add the turtle to the array
  turtles.push(req.body);
  // send the turtles object to show user the change
  res.json(turtles);
});

// Listener
app.listen(PORT, () => {
  console.log(`We are running on port ${PORT}`);
});


