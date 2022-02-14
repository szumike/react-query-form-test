const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { sleep } = require('./utils');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.get('/foo', async (req, res) => {
  await sleep(1000);
  res.send('Hi there');
});

app.post('/foo', (req, res) => {
  console.log('POST /foo, body: ', req.body);
  res.status(200).send('OK');
});

const port = '4000';
app.listen(port);

console.log(`Server is listening on port ${port}`);
