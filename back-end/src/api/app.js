const express = require('express');
require('express-async-errors');
const cors = require('cors');
const loginRouter = require('../router/loginRouter');
const productRouter = require('../router/productRouter');
const registerRouter = require('../router/registerRouter');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/images', express.static('public'));
app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);

module.exports = app;