const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const custAdmin =require('../controllers/loan_info');

router.get('/',  custAdmin.getAllAdmin);

router.post('/', custAdmin.addAdmin);

router.put('/:loanid', custAdmin.checkAdminId,custAdmin.updateAdmin);

router.delete('/:loanid', custAdmin.checkAdminId,custAdmin.deleteAdmin);


module.exports = router;