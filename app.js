const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/client/build`))

// 3) ROUTES
app.use('/api/v1/users', userRouter);

module.exports = app;
