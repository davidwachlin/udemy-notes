const express = require('express');
const morgan = require('morgan');

const connectDB = require('./connection');
const userRouter = require('./routes/userRoutes');

const app = express();

connectDB();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/client/build`));

// 3) ROUTES
app.use('/api/v1/users', userRouter);

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

module.exports = app;
