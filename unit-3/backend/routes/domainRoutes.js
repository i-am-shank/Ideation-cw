const express = require("express");
const router = express.Router();

const { getAll90sDomains } = require("../controllers/90_domains");

router.get("/90s/domains", getAll90sDomains);

module.exports = router;
