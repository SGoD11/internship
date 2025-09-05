const express = require("express");
const router = express.Router();
const { getConfiguration, updateRemark } = require("../controllers/configController");

router.get("/configurations/:id", getConfiguration);
router.put("/configurations/:id", updateRemark);

module.exports = router;
