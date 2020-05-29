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

async function searchSpendingByAccountId(req, res) {
  try {
    const { idAccount } = req.params;
    const Spending = await dbManager.Spending.findAll({
      where: {
        SpendingAccountID: idAccount,
        SpendingState: 1
      }
    });
    res.json({ status: true, data: Spending, message: " " });
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

async function searchSpendingById(req, res) {
  try {
    const { idSpending } = req.params;
    const Spending = await dbManager.Spending.findOne({
      where: {
        SpendingId: idSpending,
        SpendingState: 1
      }
    });
    res.json(Spending);
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

async function changeStatusSpending(req, res) {
  try {
    const { idSpending } = req.params;
    const Spending = await dbManager.Spending.update(
      { SpendingState: 0 },
      { returning: true, where: { SpendingId: idSpending } }
    )

    res.json({ message: "Spending deleted" });
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

exports.createSpending = createSpending;
exports.searchSpendingByAccountId = searchSpendingByAccountId;
exports.searchSpendingById = searchSpendingById;
exports.changeStatusSpending = changeStatusSpending;