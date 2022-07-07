require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/products', require('./routes/api/products'));

app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));
app.use('/users', require('./routes/api/users'));

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
// // https://www.youtube.com/watch?v=f2EqECiTBL8

// require('dotenv').config();
// const express = require('express');
// const app = express();
// const path = require('path');
// const cors = require('cors');
// const corsOptions = require('./config/corsOptions');
// const { logger } = require('./middleware/logEvents');
// const errorHandler = require('./middleware/errorHandler');

// // const morgan = require('morgan');
// // const errorHandler = require('./middleware/errorHandler');
// // const verifyJWT = require('./middleware/verifyJWT');
// // const cookieParser = require('cookie-parser');
// // const credentials = require('./middleware/credentials');
// // const mongoose = require('mongoose');
// // const connectDB = require('./config/dbConn');
// const PORT = process.env.PORT || 4000;

// // Connect to MongoDB
// // connectDB();

// // custom middleware logger
// app.use(logger);
// // app.use(morgan('dev'));

// // Handle options credentials check - before CORS!
// // and fetch cookies credentials requirement
// // app.use(credentials);

// // Cross Origin Resource Sharing
// app.use(cors(corsOptions));

// // built-in middleware to handle urlencoded form data
// app.use(express.urlencoded({ extended: false }));

// // built-in middleware for json
// app.use(express.json());

// //middleware for cookies
// // app.use(cookieParser());

// //serve static files
// app.use('/', express.static(path.join(__dirname, '/public')));

// //Routes
// app.use('/', require('./routes/root'));
// app.use('/employees', require('./routes/api/employees'))

// app.all('*', (req, res) => {
//   res.status(404);
//   if (req.accepts('html')) {
//     res.sendFile(path.join(__dirname, 'views', '404.html'));
//   } else if (req.accepts('json')) {
//     res.json({ error: '404 Not Found' });
//   } else {
//     res.type('txt').send('404 Not Found');
//   }
// });

// app.use(errorHandler);

// // routes
// // app.use('/', require('./routes/root'));
// // app.use('/register', require('./routes/register'));
// // app.use('/auth', require('./routes/auth'));
// // app.use('/refresh', require('./routes/refresh'));
// // app.use('/logout', require('./routes/logout'));

// // app.use(verifyJWT);
// // app.use('/employees', require('./routes/api/employees'));
// // app.use('/users', require('./routes/api/users'));

// // app.all('*', (req, res) => {
// //   res.status(404);
// //   if (req.accepts('html')) {
// //     res.sendFile(path.join(__dirname, 'views', '404.html'));
// //   } else if (req.accepts('json')) {
// //     res.json({ error: '404 Not Found' });
// //   } else {
// //     res.type('txt').send('404 Not Found');
// //   }
// // });

// // app.use(errorHandler);

// // mongoose.connection.once('open', () => {
// //   console.log('Connected to MongoDB');
// //   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // require('dotenv').config();
// // const express = require('express');
// // const app = express();
// // const morgan = require('morgan');
// // const cors = require('cors');
// // const corsOptions = require('./config/corsOptions')
// // // const errorHandler
// // const mongoose = require('mongoose');
// // const verifyJWT = require('./middleware/verifyJWT');
// // const cookieParser = require('cookie-parser');
// // const credentials = require('./middleware/credentials');
// // // const register = require('./routes/register');
// // // const signin = require('./routes/signin');
// // // const orders = require('./routes/orders');
// // // const stripe = require('./routes/stripe');
// // // const users = require('./routes/users');
// // // const products = require('./routes/products');
// // // const bodyParser = require('body-parser');

// // // const products = require('./products');

// // // Handle options credentials check - before CORS!
// // // and fetch cookies credentials requirement
// // app.use(credentials);

// // // // Cross Origin Resource Sharing
// // app.use(cors(corsOptions));

// // // app.use(cors());
// // app.use(morgan('dev'));
// // // app.use(bodyParser.json({ limit: '5mb' }));
// // // app.use(
// // //   bodyParser.urlencoded({
// // //     // to support URL-encoded bodies
// // //     limit: '5mb',
// // //     extended: true,
// // //   })
// // // );

// // app.use(express.json());

// // //middleware for cookies
// // app.use(cookieParser());

// // // Routes
// // // app.use('/api/register', register);
// // app.use('/register', require('./routes/register'));
// // app.use('/auth', require('./routes/auth'));
// // // app.use('/api/login', login);
// // // app.use('/api/orders', orders);
// // // app.use('/api/stripe', stripe);
// // // app.use('/api/products', products);
// // // app.use('/api/users', users);

// // app.get('/', (req, res) => {
// //   res.send('Welcome our to online shop API...');
// // });

// // app.get('/products', (req, res) => {
// //   res.send(products);
// // });

// // const port = process.env.PORT || 4000;

// // app.listen(port, () => {
// //   console.log(`Server running on port: ${port}...`);
// // });

// // mongoose
// //   .connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log('MongoDB connection established...'))
// //   .catch((error) => console.error('MongoDB connection failed:', error.message));

// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const app = express();
// // // const morgan = require('morgan');
// // // const bodyParser = require('body-parser');
// // // require('dotenv').config();
// // // var cors = require('cors');
// // // const path = require('path');

// // // //import routes
// // // const authRoutes = require('./routes/authRoutes');
// // // const categoryRoutes = require('./routes/categoryRoutes');
// // // const userRoutes = require('./routes/userRoutes');
// // // const productRoutes = require('./routes/productRoutes');
// // // const orderRoutes = require('./routes/orderRoutes');
// // // const stripeRoutes = require('./routes/stripeRoutes');

// // // const cookieParser = require('cookie-parser');
// // // const errorHandler = require('./middleware/errorMiddleware');

// // // //db connection
// // // mongoose
// // //   .connect(process.env.MONGO_URI, {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // //     // useCreateIndex: true,
// // //     // useFindAndModify: false,
// // //   })
// // //   .then(() => console.log('DB connected'))
// // //   .catch((err) => console.log(err));

// // // //MIDDLEWARE
// // // //app.use(express.limit('5M'));
// // // if (process.env.NODE_ENV === 'development') {
// // //   app.use(morgan('dev'));
// // // }
// // // app.use(morgan('dev'));
// // // app.use(bodyParser.json({ limit: '5mb' }));
// // // app.use(
// // //   bodyParser.urlencoded({
// // //     // to support URL-encoded bodies
// // //     limit: '5mb',
// // //     extended: true,
// // //   })
// // // );
// // // app.use(cookieParser());
// // // app.use(cors());

// // // //ROUTES middleware
// // // app.use('/api', authRoutes);
// // // app.use('/api', categoryRoutes);
// // // app.use('/api', userRoutes);
// // // app.use('/api', productRoutes);
// // // app.use('/api', orderRoutes);
// // // app.use('/api', stripeRoutes);

// // // __dirname = path.resolve();

// // // if (process.env.NODE_ENV === 'production') {
// // //   app.use(express.static(path.join(__dirname, '/frontend/build')));

// // //   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
// // // } else {
// // //   app.get('/', () => {
// // //     res.send('API is running...');
// // //   });
// // // }

// // // //Error middleware
// // // app.use(errorHandler);

// // // const port = process.env.PORT || 4000;

// // // app.listen(port, () => {
// // //   console.log(`Server is running on port ${port}`);
// // // });

// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const app = express();
// // // const morgan = require('morgan');
// // // const bodyParser = require('body-parser');
// // // const cookieParser = require('cookie-parser');
// // // const errorHandler = require('./middleware/errorMiddleware');
// // // require('dotenv').config();
// // // var cors = require('cors');
// // // const path = require('path');

// // // //IMPORT ROUTES
// // // const auth = require('./routes/authRoutes');
// // // const categoryRoutes = require('./routes/categoryRoutes');
// // // const userRoutes = require('./routes/userRoutes');
// // // const productRoutes = require('./routes/productRoutes');
// // // // const orderRoutes = require('./routes/orderRoutes');
// // // // const stripeRoutes = require('./routes/stripeRoutes');

// // // // CONNECT DATABASE
// // // mongoose
// // //   .connect(process.env.MONGO_URI, {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // //     //   useCreateIndex: true,
// // //     // useFindAndModify: false
// // //   })
// // //   .then(() => console.log('DB connected'))
// // //   .catch((err) => console.log(err));

// // // // MIDDLEWARE
// // // //app.use(express.limit('5M'));
// // // if (process.env.NODE_ENV === 'development') {
// // //   app.use(morgan('dev'));
// // // }

// // // app.use(morgan('dev'));
// // // app.use(bodyParser.json({ limit: '100mb' }));
// // // app.use(
// // //   bodyParser.urlencoded({
// // //     // to support URL-encoded bodies
// // //     limit: '100mb',
// // //     extended: true,
// // //   })
// // // );
// // // app.use(cookieParser());
// // // app.use(cors());

// // // // ROUTES MIDDLEWARE
// // // app.use('/api', auth);
// // // app.use('/api', categoryRoutes);
// // // app.use('/api', userRoutes);

// // // app.use('/api', productRoutes);

// // // // app.use('/api', orderRoutes);
// // // // app.use('/api', stripeRoutes);

// // // __dirname = path.resolve();

// // // if (process.env.NODE_ENV === 'production') {
// // //   app.use(express.static(path.join(__dirname, '/frontend/build')));

// // //   app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
// // // } else {
// // //   app.get('/', () => {
// // //     res.send('API is running...');
// // //   });
// // // }

// // // //Error middleware
// // // app.use(errorHandler);

// // // const port = process.env.PORT || 4000;

// // // app.listen(port, () => {
// // //   console.log(`App is running on port ${port}`);
// // // });
