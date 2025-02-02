const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');  // To interact with the database

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form on the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Render the form
});

// Handle the form submission
app.post('/submit', (req, res) => {
  const userName = req.body.data;  // The 'data' field from the form

  // Insert the user name into the database
  db.insertUser(userName, (err) => {
    if (err) {
      console.error('Error saving to the database:', err);
      return res.status(500).send('Error saving to the database.');
    }
    res.send('Name saved successfully!');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app; // Export the app for testing
