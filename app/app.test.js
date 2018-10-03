const request = require('supertest');
const app = require('./app');

describe('Home Routes', () => {
  test('/ responds successfully', (done) => (
    request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Yo World!');
        done();
      })
  ));

  test('/healthcheck responds successfully', (done) => (
    request(app)
      .get('/healthcheck')
      .expect(200)
      .then((response) => {
        expect(response.body.status).toEqual('ok');
        done();
      })
  ));
});
