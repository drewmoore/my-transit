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

  describe('/healthcheck', () => {
    test('responds successfully', (done) => (
      request(app)
        .get('/healthcheck')
        .expect(200)
        .then((response) => {
          expect(response.body.status).toEqual('ok');
          done();
        })
    ));

    test('responds with error', (done) => {
      connection.close().then(() => {
        request(app)
          .get('/healthcheck')
          .expect(200)
          .then((response) => {
            expect(response.body.error).toEqual(expect.stringContaining('database'));
            done();
          });
      });
    });
  });
});
