const express = require("express");
const { loginAdmin } = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");


const router = express.Router();


router.post("/login", loginAdmin);


router.get("/profile", protect, (req, res) => {
res.json(req.admin);
});


module.exports = router;