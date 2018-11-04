const request = require('supertest');
const initializeApp = require('./app');

describe('Home Routes', () => {
  let app, connection;

  beforeAll(async () => {
    const application = await initializeApp();
    app = application.app;
    connection = application.connection;
  });

  afterAll(() => (
    connection.close()
  ));

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
