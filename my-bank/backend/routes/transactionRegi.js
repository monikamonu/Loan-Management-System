const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const custTransaction =require('../controllers/Transaction_info');

router.get('/',  custTransaction.getAllTransaction);

router.post('/', custTransaction.addTransaction);

router.put('/:No', custTransaction.checkTransactionId,custTransaction.updateTransaction);

router.delete('/:No', custTransaction.checkTransactionId,custTransaction.deleteTransaction);

module.exports = router;