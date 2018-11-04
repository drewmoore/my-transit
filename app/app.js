const express = require('express');
const app = express();
const initializeConnection = require('../lib/db/mongoose');

const initializeApp = async () => {
  const connection = await initializeConnection();

  app.get('/', (req, res) => res.send('Yo World!'));

  app.get('/healthcheck', (req, res) => {
    if (connection.readyState === 1) {
      return res.send({ status: 'ok' });
    }
    res.status(500);
    return res.render('error', { error: 'database not connected' });
  });

  return  { app, connection };
};

module.exports = initializeApp;
