module.exports.connections = Object.freeze({
  mongo: Object.freeze({
    dbName: process.env.MONGO_DB_NAME,
    url: process.env.MONGO_URL
  })
});
