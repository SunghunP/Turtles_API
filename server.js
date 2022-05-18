// Dependencies
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
  res.send(`AyOO`)
})

// Listener
app.listen(PORT, () => {
  console.log(`We are running on port ${PORT}`)
})

