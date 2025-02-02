const request = require('supertest');
const app = require('../app');
const db = require('../db');
const assert = require('assert');

// Set up the database connection before tests
before(async () => {
  // Ensure DB connection is established before running tests
  await new Promise((resolve, reject) => {
    db.connection.connect(err => {
      if (err) reject(err);
      else resolve();
    });
  });
});

// Test the GET request to fetch the form
describe('GET /', function() {
  this.timeout(5000); // Set timeout to 5 seconds

  it('should return the form', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.status, 200);
    assert(res.text.includes('<h1>Enter Your Name</h1>'));
  });
});

// Test the POST request to submit the form and save the user to the database
describe('POST /submit', function() {
  this.timeout(5000); // Set timeout to 5 seconds

  it('should save a name to the database', async () => {
    const userName = 'John Doe';

    // Make a POST request to the form submission endpoint
    const res = await request(app)
      .post('/submit')
      .send({ data: userName });

    // Check that the response contains the success message
    assert.strictEqual(res.text, 'Name saved successfully!');

    // Use a promise to ensure the database query completes before the test ends
    const results = await new Promise((resolve, reject) => {
      db.connection.query('SELECT * FROM users WHERE name = ?', [userName], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });

    // Check that the name was inserted into the database
    assert.strictEqual(results.length, 1);  // We should have one record
    assert.strictEqual(results[0].name, userName);  // Check that the name matches
  });
});

// Clean up the database after tests
afterEach(async () => {
  await new Promise((resolve, reject) => {
    db.connection.query('DELETE FROM users WHERE name = ?', ['John Doe'], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
});

// Close DB connection after all tests are done
after(async () => {
  await new Promise((resolve, reject) => {
    db.closeConnection((err) => {
      if (err) reject(err);
      else resolve();
    });
  });
});
