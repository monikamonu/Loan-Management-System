const db = require('../util/database');
const { v4: uuidv4 } = require('uuid');

const checkTransactionId = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM Transaction
        WHERE No=${req.params.No}`;
        console.log(req.params.No);
    db.query(checkAvailability).then(dbRes => {
        if (dbRes.rows.length > 0) {
            next();
        } else {
            res.json({
                error: true,
                message: 'No user found with the ID'
            });
        }
    });
}

const getAllTransaction = (req, res, next) => {
    const query = `SELECT * FROM Transaction`;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            customer: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}
const addTransaction = (req, res, next) => {
    const query = `
        INSERT INTO Transaction
        VALUES (
            ${uuidv4()}, 
            '${req.body.date}',
            ${req.body.amount},
            ${req.body.interest},
            ${req.body.balance},
            )`;
            console.log(req.body);
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message:'data is inserted'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const updateTransaction = (req, res, next) => {
    const updateQuery = `UPDATE Transaction
    SET 
        date='${req.body.date}',
        amount=${req.body.amount},
        interest=${req.body.interest}, 
        balance=${req.body.balance}, 
        WHERE No=${req.params.No}
    `;
    db.query(updateQuery).then(dbRes => {
        res.json({
            error: false,
            message: 'customer details updated successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}
const deleteTransaction= (req, res, next) => {
    const query = `
        DELETE FROM Transaction
        WHERE No=${req.params.No}
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'Transaction is Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

module.exports = {
    checkTransactionId,
    getAllTransaction,
    addTransaction,
    updateTransaction,
    deleteTransaction
}