const db = require('../util/database');
const { v4: uuidv4 } = require('uuid');

const checkCustomerId = (req, res, next) => {
    const checkAvailability = `
        SELECT * FROM cust_info
        WHERE cid=${req.params.cid}`;
        console.log(req.params.cid);
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

const getAllCustomers = (req, res, next) => {
    const query = `SELECT * FROM cust_info`;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            customer: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}
const getSingleCustomers = (req, res, next) => {
    const query = `SELECT * FROM cust_info where cid=${req.params.cid}`;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            customer: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}
const addCustomer = (req, res, next) => {
    const query = `
        INSERT INTO cust_info
        VALUES (
            '${uuidv4()}', 
            '${req.body.firstname}',
            '${req.body.lastname}',
            ${req.body.age},
            ${req.body.phno},
            '${req.body.address}'
            '${req.body.email}'
            ${req.body.custloanid}
            )`;
            console.log(req.body.addCustomer);
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message:'data is inserted'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
}

const updateCustomer = (req, res, next) => {
    const updateQuery = `
        UPDATE cust_info
        SET
            firstname='${req.body.firstname}',
            lastname='${req.body.lastname}',
            age=${req.body.age}, 
            phno=${req.body.phno},
            address='${req.body.address}'
            email='${req.body.email}'
            custloanid=${req.body.custloanid}
        WHERE cid=${req.params.cid}
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
const deleteCustomer= (req, res, next) => {
    const query = `
        DELETE FROM cust_info
        WHERE cid=${req.params.cid}
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
    checkCustomerId,
    getAllCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    getSingleCustomers
}