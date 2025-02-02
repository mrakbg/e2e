const mysql = require('mysql2');

// Create a connection to the database (change these values to match your database configuration)
const connection = mysql.createConnection({
  host: process.env.DB_HOST || '34.56.34.56',  // Default to 'localhost' if DB_HOST is not set
  user: process.env.DB_USER || 'root',      // Default to 'root' if DB_USER is not set
  password: process.env.DB_PASSWORD || 'Anuj@1738@', // Default to 'password' if DB_PASSWORD is not set
  database: process.env.DB_NAME || 'mydb'   // Default to 'mydb' if DB_NAME is not set
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
