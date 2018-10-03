const connections = require('../../config/connections');
const mongoose = require('mongoose');

mongoose.connect(connections.mongo.url);

module.exports.mongoose = mongoose;
