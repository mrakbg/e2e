const request = require('supertest');
const app = require('../app');
const db = require('../db');
const assert = require('assert');

// Test the GET request to fetch the form
describe('GET /', () => {
  it('should return the form', async () => {
    const res = await request(app).get('/');
    assert.strictEqual(res.status, 200);
    assert(res.text.includes('<h1>Enter Your Name</h1>'));
  });
});

// Test the POST request to submit the form and save the user to the database
describe('POST /submit', () => {
  it('should save a name to the database', async () => {
    const userName = 'John Doe';
    
    // Make a POST request to the form submission endpoint
    const res = await request(app)
      .post('/submit')
      .send({ data: userName });

    // Check that the response contains the success message
    assert.strictEqual(res.text, 'Name saved successfully!');

    // Check that the name was inserted into the database
    db.connection.query('SELECT * FROM users WHERE name = ?', [userName], (err, results) => {
      assert.strictEqual(results.length, 1);  // We should have one record
      assert.strictEqual(results[0].name, userName);  // Check that the name matches
    });
  });
});
