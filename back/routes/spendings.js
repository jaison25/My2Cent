var express = require('express');
var router = express.Router();
const spendingController = require("../controllers/spending.controller");


router.post("/", spendingController.createSpending);
router.get("/:idAccount", spendingController.searchSpendingByAccountId);
router.get("/details/:idSpending", spendingController.searchSpendingById);
router.put("/:idSpending", spendingController.changeStatusSpending);

module.exports = router;
