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
    res.json({ status: true, message: '', data: account });
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

async function chartAccountState(req, res) {
  try {
    const { idUser } = req.params;
    const [accounts] = await dbManager.sequelizeCx.query(`
      SELECT AccountUserID, AccountName, SUM(incomes) incomes, SUM(spending) spending FROM (
      (SELECT AccountUserID, AccountName, SUM(i.IncomeAmount) incomes, 0 spending
        FROM account a
        INNER JOIN incomes i ON i.IncomeAccountID = a.AccountId GROUP BY AccountName, AccountUserID)
                                                              
        UNION
        
        (SELECT 
        AccountUserID, AccountName, 0 incomes, SUM(s.SpendingAmount) spending
        FROM account a
        INNER JOIN spending s ON s.SpendingAccountID = a.AccountId GROUP BY AccountName, AccountUserID)
        ) X WHERE AccountUserID = ${idUser}
        GROUP BY AccountUserID, AccountName`
    );
    const accountName = accounts.map(account => account.AccountName);
    const incomes = accounts.map(account => account.incomes);
    const spending = accounts.map(account => account.spending);
    res.json({ status: true, data: { accountName, incomes, spending }, message: "" })
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
exports.chartAccountState = chartAccountState;