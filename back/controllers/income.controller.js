const dbManager = require("../database/db.manager");

function createIncome(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newIncomeObject = {
    IncomeName: req.body.IncomeName,    
    IncomeAmount: req.body.IncomeAmount,
    IncomeAccountID: req.body.IncomeAccountID
  };
  dbManager.Income.create(newIncomeObject)
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

exports.createIncome = createIncome;