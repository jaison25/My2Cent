var express = require('express');
var router = express.Router();
const accountController = require("../controllers/account.controller");


router.post("/", accountController.createAccount);

module.exports = router;
