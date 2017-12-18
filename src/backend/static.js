const serveStatic = require('serve-static');

module.exports = (app) => {
  app.use(serveStatic('static'));
};
