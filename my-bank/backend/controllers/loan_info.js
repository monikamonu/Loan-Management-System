const db = require('../util/database');
const { v4: uuidv4 } = require('uuid');

const checkAdminId = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM loan_info
        WHERE loanid=${req.params.loanid}`;
        console.log(req.params.loanid);
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

const getAllAdmin = (req, res, next) => {
    const query = `SELECT * FROM loan_info`;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            customer: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}
const addAdmin = (req, res, next) => {
    const query = `
        INSERT INTO loan_info
        VALUES (
            ${uuidv4()}, 
            '${req.body.loantype}',
            ${req.body.amount},
            ${req.body.term},
            ${req.body.interest},
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

const updateAdmin = (req, res, next) => {
    const updateQuery = `UPDATE loan_info
    SET 
        loantype='${req.body.loantype}',
        amount=${req.body.amount},
        term=${req.body.term},
        interest=${req.body.interest},  
        WHERE loanid=${req.params.loanid}
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
const deleteAdmin= (req, res, next) => {
    const query = `
        DELETE FROM loan_info
        WHERE loanid=${req.params.loanid}
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'Customer account is Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

module.exports = {
    checkAdminId,
    getAllAdmin,
    addAdmin,
    updateAdmin,
    deleteAdmin
}