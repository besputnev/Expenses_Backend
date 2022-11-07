const express = require('express');
const router = express.Router();

const {
  getAllExpenses,
  createNewExpense,
  changeExpenseInfo,
  deleteExpense
} = require('../controllers/task.controllers');

// Task routes
router.get('/allExpenses', getAllExpenses);
router.post('/createExpense', createNewExpense);
router.patch('/updateExpense', changeExpenseInfo);
router.delete('/deleteExpense', deleteExpense);

//User routes
module.exports = router;