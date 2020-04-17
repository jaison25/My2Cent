var express = require('express');
var router = express.Router();
const accountController = require("../controllers/account.controller");


router.post("/", accountController.createAccount);
router.get("/:idUser", accountController.searchAccountsByUserId);
router.get("/details/:idAccount", accountController.searchAccountsById);
router.put("/:idAccount", accountController.changeStatusAccount);

module.exports = router;
