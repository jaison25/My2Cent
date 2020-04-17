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
        UserName: userName,
        UserPassword: userPassword
      }
    });

    if (user) {
      //Se crea sesión de usuario en el back
      //req.session.loggedin = true;
      //req.session.username = username;
      res.json({ message: "User logged" });
    }
    else {
      res.json({ message: "User/Password wrong" });
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