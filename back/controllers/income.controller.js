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

async function searchIncomesByAccountId(req, res) {
  try {
    const { idAccount } = req.params;
    const Incomes = await dbManager.Income.findAll({
      where: {
        IncomeAccountID: idAccount,
        IncomeState: 1
      }
    });
    res.json({ status: true, data: Incomes, message: " " });
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

async function searchIncomesById(req, res) {
  try {
    const { idIncome } = req.params;
    const Income = await dbManager.Income.findOne({
      where: {
        IncomeId: idIncome
      }
    });
    res.json(Income);
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

async function changeStatusIncome(req, res) {
  try {
    const { idIncome } = req.params;
    const Income = await dbManager.Income.update(
      { IncomeState: 0 },
      { returning: true, where: { IncomeId: idIncome } }
    )

    res.json({ message: "Income deleted" });
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

exports.createIncome = createIncome;
exports.searchIncomesByAccountId = searchIncomesByAccountId;
exports.searchIncomesById = searchIncomesById;
exports.changeStatusIncome = changeStatusIncome;