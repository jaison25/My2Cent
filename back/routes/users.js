var express = require('express');
var router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/", userController.createUser);
router.post("/login", userController.login);
router.get("/:idUser", userController.findUserById);

module.exports = router;
