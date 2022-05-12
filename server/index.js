require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();
const router = require('./router/index');
const errorMiddleware = require('./middleware/error.middleware');

// Middleware
app.use(morgan('dev'));
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);
app.use(errorMiddleware);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/client/build')));

// Start server
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port = ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};
start();

// end
