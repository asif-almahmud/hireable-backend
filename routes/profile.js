const express = require("express");
// controller functions
const {
  getProfileData,
  postProfileData,
  updateProfileData,
} = require("../controllers/profile");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require authentication for all profile routes
router.use(requireAuth);

//-> GET Profile data for a specific user
router.get("/", getProfileData);

//-> POST/add/create a new profile
router.post("/", postProfileData);

//-> UPDATE/edit Profile data
router.patch("/", updateProfileData);

module.exports = router;
