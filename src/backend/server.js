require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

require('./template')(app);

require('./static')(app)
  .then(require('./assets'))
  .then(require('./view'))
  .catch(console.error);

app.listen(process.env.PORT || 8080);
