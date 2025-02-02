const mysql = require('mysql2');

// Create a connection to the database (change these values to match your database configuration)
const connection = mysql.createConnection({
  host: 'localhost',  // Change this if using CloudSQL
  user: 'root',
  password: process.env.DB_PASSWORD, // Pull password from the environment variable
  database: 'mydb' // Replace with your database name
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
