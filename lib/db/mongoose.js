const connections = require('../../config/connections');
const mongoose = require('mongoose');

module.exports = async () => {
  const url = `${connections.mongo.url}/${connections.mongo.dbName}`;
  const connection = await mongoose.createConnection(url, { useNewUrlParser: true });

  return connection;
};
