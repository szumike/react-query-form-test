const express = require('express');
const logger = require('morgan');
const cors = require('cors');

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

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.post('/', (req, res) => {
  console.log('POST /, body: ', req.body);
  res.status(200).send('OK');
});

const port = '6000';
app.listen(port);

console.log(`Server is listening on port ${port}`);
