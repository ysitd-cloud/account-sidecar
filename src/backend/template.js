const path = require('path');
const { Environment, FileSystemLoader } = require('nunjucks');
const { IS_PRODUCTION } = require('./config');

const env = new Environment(new FileSystemLoader('views', { watch: !IS_PRODUCTION }));

function TemplateEngine(name, options) {
  this.name = name;
  this.path = name;
  this.defaultEngine = options.defaultEngine;
  this.ext = path.extname(name);
  if (!this.ext) {
    this.ext = (this.defaultEngine[0] !== '.' ? '.' : '') + this.defaultEngine;
    this.name += this.ext;
  }
}

TemplateEngine.prototype.render = function render(opts, cb) {
  env.render(this.name, opts, cb);
};

module.exports = (app) => {
  app.set('views', './views');
  app.set('view', TemplateEngine);
  app.set('nunjecksEnv', env);
};
