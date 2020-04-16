var express = require('express');
var router = express.Router();
const spendingController = require("../controllers/spending.controller");


router.post("/", spendingController.createSpending);

module.exports = router;
