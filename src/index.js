// @flow
const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const cors = require('cors');
const { auth, port } = require('./env');
const { appreciate } = require('./appreciate');
const { test } = require('./test');

const app = express();

if (auth) {
  app.use(
    basicAuth({
      users: {
        [auth[0]]: auth[1],
      },
    }),
  );
}

app
  .use(cors())
  .use(bodyParser.json())
  // $FlowFixMe post doesn't exist?
  .post('/', async (req, res) => {
    try {
      await test();
      res.json({ status: 'success' });
    } catch (error) {
      res.status(422);
      res.json({ status: 'error', message: error.message });
    }
  })
  .post('/unipos', async (req, res) => {
    try {
      await appreciate(req.body);
      res.status(200);
      res.json({ status: 'success' });
    } catch (error) {
      res.status(422);
      res.json({ status: 'error', message: error.message });
    }
  })
  .listen(port, () => {
    console.log(`express server started at ${port}`);
  });
