const express = require('express');
const app = express();
const mongoose = require('../lib/db/mongoose');

app.get('/', (req, res) => res.send('Yo World!'));

app.get('/healthcheck', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    return res.send({ status: 'ok' });
  }
  res.status(500);
  return res.render('error', { error: 'database not connected' });
});

module.exports = app;
