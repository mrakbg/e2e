const mysql = require('mysql2');

// Create a connection to the database (using environment variables or defaults)
const connection = mysql.createConnection({
  host: process.env.DB_HOST || '34.56.34.56',  // Use environment variable or fallback to default host
  user: process.env.DB_USER || 'root',         // Use environment variable or fallback to 'root'
  password: process.env.DB_PASSWORD || 'Anuj@1738@',  // Use environment variable or fallback to a default password
  database: process.env.DB_NAME || 'mydb'      // Use environment variable or fallback to 'mydb'
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

// Function to close the connection to the database
function closeConnection(callback) {
  connection.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err);
      callback(err);
      return;
    }
    console.log('Database connection closed.');
    callback(null);
  });
}

module.exports = {
  insertUser,
  closeConnection,
};
