const express = require('express');
const router = express.Router();

//const auth = require('../middlewares/auth');

const custController =require('../controllers/cust_info');



router.get('/',  custController.getAllCustomers);

router.get('/:cid',  custController.getSingleCustomers);

router.post('/', custController.addCustomer);


router.put('/:cid', custController.checkCustomerId,custController.updateCustomer);

router.delete('/:cid', custController.checkCustomerId,custController.deleteCustomer);



//loan_info
// const custAdmin =require('../controllers/loan_info');

// router.get('/',  custAdmin.getAllAdmin);

// router.post('/', custAdmin.addAdmin);

// router.put('/:loanid', custAdmin.checkAdminId,custAdmin.updateAdmin);

// router.delete('/:loanid', custAdmin.checkAdminId,custAdmin.deleteAdmin);


module.exports = router;