// app.js
const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Export the app for testing
const server = app.listen(3000, () => {
    console.log('App listening at http://localhost:3000');
});

// Export the server for use in tests
module.exports = server;
