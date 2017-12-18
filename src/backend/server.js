require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const staticServe = require('./static');
const assets = require('./assets');
const view = require('./view');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(helmet());

require('./template')(app);

(async () => {
  staticServe(app);
  assets(app);
  await view(app);
})();

app.listen(process.env.PORT || 8080);
