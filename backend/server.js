const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/errorMiddleware');
require('dotenv').config();
var cors = require('cors');
const path = require('path');

//IMPORT ROUTES
const auth = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const stripeRoutes = require('./routes/stripeRoutes');

// CONNECT DATABASE
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

// MIDDLEWARE
//app.use(express.limit('5M'));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    limit: '100mb',
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

// ROUTES MIDDLEWARE
app.use('/api', auth);
app.use('/api', categoryRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);

// app.use('/api', orderRoutes);
// app.use('/api', stripeRoutes);

__dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
  app.get('/', () => {
    res.send('API is running...');
  });
}

//Error middleware
app.use(errorHandler);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
