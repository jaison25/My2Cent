var express = require('express');
var router = express.Router();
const incomeTypeController = require("../controllers/incometype.controller");


router.post("/", incomeTypeController.createIncomeType);
router.put("/:idIncomeType", incomeTypeController.changeStatusIncomeType);

module.exports = router;
