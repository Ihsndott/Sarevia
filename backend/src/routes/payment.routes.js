const express = require("express");
const router = express.Router();

const {payment} = require("../controllers/payment.controller");

router.post("/checkout",payment);


module.exports = router;