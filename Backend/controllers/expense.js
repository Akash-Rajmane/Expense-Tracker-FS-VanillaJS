const Expense = require('../models/expense');

// Controller to create an expense
exports.createExpense = async (req, res, next) => {
  try {
    const { amount, description, category } = req.body;
    const expense = await Expense.create({ amount, description, category });
    res.status(201).json(expense);
    console.log("expense added");
  } catch (error) {
    console.log(error);
  }
};

// Controller to get all expenses
exports.getAllExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    console.log(error);
  }
};

// Controller to delete an expense
exports.deleteExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Expense.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.log(error);
  }
};

// Controller to update an expense
exports.updateExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { amount, description, category } = req.body;
    await Expense.update({ amount, description, category }, { where: { id } });
    res.status(200).send();
  } catch (error) {
    console.log(error);
  }
};