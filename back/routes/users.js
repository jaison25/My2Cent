var express = require('express');
var router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
//router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
//});

router.post("/", userController.createUser);
router.post("/login", userController.login);

module.exports = router;
