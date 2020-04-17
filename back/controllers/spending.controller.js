const dbManager = require("../database/db.manager");

function createSpending(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newSpendingObject = {
    SpendingName: req.body.SpendingName,
    SpendingAmount: req.body.SpendingAmount,
    SpendingAccountID: req.body.SpendingAccountID
  };
  dbManager.Spending.create(newSpendingObject)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        menssage: "SOMENTHING HAPPENED, ERROR"
      });
    });
}

exports.createSpending = createSpending;