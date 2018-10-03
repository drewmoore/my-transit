const app = require('./app/app');
const port = process.env.WEB_PORT;

app.listen(port, () => console.log(`Express listening on port ${port}!`));
