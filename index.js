const initializeApp = require('./app/app');
const port = process.env.WEB_PORT;

initializeApp().then(({ app }) => {
  app.listen(port, () => console.log(`Express listening on port ${port}!`));
});
