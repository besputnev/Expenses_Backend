const Expenses = require("../../schema/taskSchema");

module.exports.getAllExpenses = (req, res) => {
  try {
    Expenses.find().then((result) => {
      res.send({ data: result });
    });
  } catch (e) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports.createNewExpense = (req, res) => {
  try {
    const newExpense = new Expenses(req.body);
    newExpense.save().then(() => {
      Expenses.find().then((result) => {
        res.send({ data: result });
      });
    });
  } catch (e) {
    res.status(500).send({ message: "Internal server error" });
  }
};