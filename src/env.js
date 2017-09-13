// @flow
require('dotenv').config();

const { AUTH, PORT, NODE_ENV } = process.env;

// AUTH expect foo:bar
const auth = AUTH ? AUTH.split(':') : undefined;
const port = PORT || 3000;
const nodeEnv = NODE_ENV || 'dev';

module.exports = {
  auth,
  port,
  nodeEnv,
};
