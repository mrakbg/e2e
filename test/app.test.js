const request = require('supertest');
const app = require('../app'); // Import the app
const expect = require('chai').expect;

describe('GET /', function() {
    it('should return Hello World', function(done) {
        request(app)
            .get('/')
            .end(function(err, res) {
                expect(res.text).to.equal('Hello, World!');
                done();
            });
    });
});
