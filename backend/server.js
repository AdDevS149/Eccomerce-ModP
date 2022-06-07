require('dotenv').config();
const express = require('express');
const colors = require('colors')
const app = express();
const path = require('path');
//INSTALL MORGAN 

const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
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

app.use(verifyJWT);
app.use('/products', require('./routes/api/productApi'));
app.use('/users', require('./routes/api/usersApi'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});




// const express = require('express')
// const colors = require('colors')
// const dotenv = require('dotenv').config()
// const { errorHandler } = require('./middleware/errorMiddleware')
// const connectDB = require('./config/dbConn')
// const port = process.env.PORT || 6000

// connectDB()

// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))


// // app.get('/api/products', (req, res) => {
// //     res.status(200).json( {
// //         message: "get goals"
// //     })
// // })
// app.use('/api/products', require('./routes/productRoutes'))
// // app.use('/api/users', require('./routes/userRoutes'))

// // Serve frontend
// // if (process.env.NODE_ENV === 'production') {
// //   app.use(express.static(path.join(__dirname, '../frontend/build')))

// //   app.get('*', (req, res) =>
// //     res.sendFile(
// //       path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
// //     )
// //   )
// // } else {
// //   app.get('/', (req, res) => res.send('Please set to production'))
// // }

// app.use(errorHandler)

// app.listen(port, () => console.log(`Server started on port ${port}`))

// // # ${process.env.MONGO_URI}