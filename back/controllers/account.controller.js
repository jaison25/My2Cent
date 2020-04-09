const dbManager = require("../database/db.manager");

function createAccount(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newAccountObject = {
    AccountName: req.body.AccountName,    
    AccountType: req.body.AccountType,
    AccountTotal: req.body.AccountTotal,
    AccountUserID: req.body.AccountUserID
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

exports.createAccount = createAccount;