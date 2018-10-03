const request = require('supertest');
const app = require('./app');

test('/ responds successfully', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .end((error, response) => {
      expect(error).toBeNull();
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Yo World!');
      done();
    });
});
