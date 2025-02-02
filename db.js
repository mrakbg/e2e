const mysql = require('mysql2');

// Create a connection to the database (change these values to match your database configuration)
const connection = mysql.createConnection({
  host: process.env.DB_HOST,  // Pulling DB host from environment variable
  user: process.env.DB_USER,  // Pulling DB username from environment variable
  password: process.env.DB_PASSWORD,  // Pulling DB password from environment variable
  database: process.env.DB_NAME  // Pulling DB name from environment variable
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

// Function to insert user data into the database
function insertUser(name, callback) {
  const query = 'INSERT INTO users (name) VALUES (?)';
  connection.query(query, [name], (err, results) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, results);
  });
}

module.exports = {
  insertUser,
};
