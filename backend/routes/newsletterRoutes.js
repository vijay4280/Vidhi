const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controllers/newsletterController");


const router = express.Router();


router.post("/subscribe", controller.subscribe);
router.get("/admin", protect, controller.getSubscribers);


module.exports = router;