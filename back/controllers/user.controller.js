const dbManager = require("../database/db.manager");

function createUser(req, res) {
  if (!req.body) {
    res.status(400).send({ menssage: "REQUEST IS EMPTY" });
    return;
  }
  const newUserObject = {
    UserName: req.body.UserName,
    UserLastName: req.body.UserLastName,
    UserNickName: req.body.UserNickName,
    UserMail: req.body.UserMail,
    UserBirth: req.body.UserBirth,
    UserPassword: req.body.UserPassword,
    UserGender: req.body.UserGender
  };

  dbManager.User.create(newUserObject)
    .then((data) => {
      res.send({
        status: true,
        message: "Usuario registrado",
        data: { username: newUserObject.UserNickName, email: newUserObject.UserMail, id: data.UserId, lastname: newUserObject.UserLastName, birth: newUserObject.UserBirth}
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({
        status: false,
        menssage: "SOMENTHING HAPPENED, ERROR"
      });
    });
}

async function login(req, res) {
  try {
    if (!req.body) {
      res.status(400).send({ menssage: "REQUEST IS EMPTY" });
      return;
    }
    const { userName, userPassword } = req.body;

    //Query user
    const user = await dbManager.User.findOne({
      where: {
        UserMail: userName,
        UserPassword: userPassword
      }
    });

    if (user) {
      const userLogin = {
        username: user.UserName,
        email: user.UserMail,
        id: user.UserId,
        lastname: user.UserLastName,
        birth: user.UserBirth
      }
      res.json({ status: true, data: userLogin, message: "User logged" });
    }
    else {
      res.json({ status: false, message: "User/Password wrong" });
    }
  }
  catch (e) {
    //∫ Print error on console
    console.log(e);
    // Send error message as a response
    res.status(500).send({
      message: "Some error occurred"
    });
  }
}
exports.createUser = createUser;
exports.login = login;