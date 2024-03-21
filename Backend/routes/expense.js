const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense');

router.post('/', expenseController.createExpense);

router.get('/', expenseController.getAllExpenses);

router.delete('/:id', expenseController.deleteExpense);

router.put('/:id', expenseController.updateExpense);

module.exports = router;
