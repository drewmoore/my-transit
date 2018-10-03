const connections = require('../../config/connections');
const mongoose = require('mongoose');

const url = `${connections.mongo.url}/${connections.mongo.dbName}`;

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.on('error', (error) => { console.log('There was an error connecting to Mongo:', error); });
mongoose.connection.once('open', () => { console.log('Express connected to Mongo at:', url); })

module.exports = mongoose;
