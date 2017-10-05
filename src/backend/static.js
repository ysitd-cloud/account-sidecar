const serveStatic = require('serve-static');

module.exports = app => new Promise((resolve) => {
  app.use(serveStatic('static'));
  resolve(app);
});
