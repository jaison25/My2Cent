const dbManager = require("../database/db.manager");

function createUser(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newUserObject = {
    UserName: req.body.UserName,    
    UserMail: req.body.UserMail,
    UserBirth: req.body.UserBirth,
    UserPassword: req.body.UserPassword,
    UserGender: req.body.UserGender
  };
  dbManager.User.create(newUserObject)
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

exports.createUser = createUser;