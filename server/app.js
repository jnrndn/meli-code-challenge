const express = require('express');
const cors = require('cors')
const apiRouter = require('./routes/api')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use('/api', apiRouter)

module.exports = app;