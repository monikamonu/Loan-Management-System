const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;

const db = require('./util/database');

// routes
const custRoutes = require('./routes/custRegi');

const TransRoutes = require('./routes/transactionRegi')

const loanRoutes = require('./routes/loanRegi');



//const usersRoutes = require('./routes/users');

// cors middleware
app.use(cors());

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 app.use('/cust_info',custRoutes);

app.use('/loan_info',loanRoutes);

app.use('/Transaction_info',TransRoutes);

//app.use('/users', usersRoutes);

// error handling middleware
app.use((err, req, res, next) => {
    res.send({
        error: true,
        message: 'Server Error',
        err: err
    });
});

app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});



