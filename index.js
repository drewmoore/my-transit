const app = require('./app/app');
const port = process.env.WEB_PORT;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
