const express = require('express');
const app = express();
const port = process.env.WEB_PORT;

app.get('/', (req, res) => res.send('Hello World, Yo update!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
