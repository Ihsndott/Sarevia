const express = require("express");
const router = express.Router();

const {receiveEmail} = require("../controllers/email.controller");


router.post("/",receiveEmail);

module.exports = router;