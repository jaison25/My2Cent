var express = require('express');
var router = express.Router();
const incomeController = require("../controllers/income.controller");


router.post("/", incomeController.createIncome);
router.get("/:idAccount", incomeController.searchIncomesByAccountId);
router.get("/details/:idIncome", incomeController.searchIncomesById);
router.put("/:idIncome", incomeController.changeStatusIncome);

module.exports = router;
