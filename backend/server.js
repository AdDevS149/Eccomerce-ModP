require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
// const products = require('./routes/products')
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// custom middleware morgan
app.use(morgan('dev'));

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

// Admin Routes
app.use('/admin', /*isUser, isAdmin,*/ require('./routes/adminRoutes'));
app.use('/refresh', require('./routes/refresh'));
// app.use('/users', require('./routes/privateRoutes'));
app.use('/public', require('./routes/publicRoutes'));
app.use('/private', require('./routes/privateRoutes'))


//Public Routes

// app.use('/products', require('./routes/products'));
// app.use('/', require('./routes/publicRoutes'));

// app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
// https://www.youtube.com/watch?v=f2EqECiTBL8

//PUblic, Private(Auth, isLogged?), Admin

// Middleware to check logged in and admin middleware to check
