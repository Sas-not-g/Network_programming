/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect(('mongodb://127.0.0.1:27017/networkdb'), {
  useNewUrlParser: true,
});

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/add', require('./routes/quotes'));
app.use('/daily', require('./routes/daily'));
app.use('/', require('./routes/base'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
