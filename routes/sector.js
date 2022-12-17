const express = require("express");
const { getSectorData } = require("../controllers/sector");

const router = express.Router();

//-> GET All Sectors
router.get("/", getSectorData);

module.exports = router;
