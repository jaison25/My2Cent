const dbManager = require("../database/db.manager");

function createAccount(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newAccountObject = {
    AccountName: req.body.AccountName,
    //AccountType: req.body.AccountType,
    AccountTotal: req.body.AccountTotal,
    AccountUserID: req.body.AccountUserId
  };
  dbManager.Account.create(newAccountObject)
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

async function searchAccountsByUserId(req, res) {
  try {
    const { idUser } = req.params;
    const accounts = await dbManager.Account.findAll({
      attributes: ['AccountId', 'AccountName', 'AccountTotal'],
      where: {
        AccountUserID: idUser,
        AccountState: 1
      }
    });
    res.json({
      status: true,
      message: "List accounts",
      data: accounts
    });
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

async function searchAccountsById(req, res) {
  try {
    const { idAccount } = req.params;
    const account = await dbManager.Account.findOne({
      attributes: ['AccountId', 'AccountName', 'AccountTotal'],  
      where: {
        AccountId: idAccount,
        AccountState: 1
      }
    });
    res.json({status:true, message:'', data:account});
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

async function changeStatusAccount(req, res) {
  try {
    const { idAccount } = req.params;
    const account = await dbManager.Account.update(
      { AccountState: 0 },
      { returning: true, where: { AccountId: idAccount } }
    )

    res.json({ message: "Account deleted" });
  } catch (error) {
    res.status(500).send({
      menssage: "ERROR, SORRY"
    });
  }
}

exports.createAccount = createAccount;
exports.searchAccountsByUserId = searchAccountsByUserId;
exports.searchAccountsById = searchAccountsById;
exports.changeStatusAccount = changeStatusAccount;