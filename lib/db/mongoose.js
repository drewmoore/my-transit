const connections = require('../../config/connections');
const mongoose = require('mongoose');

module.exports = initializeConnection = async () => {
  const url = `${connections.mongo.url}/${connections.mongo.dbName}`;
  const connection = await mongoose.createConnection(url, { useNewUrlParser: true });

  return connection;
};
