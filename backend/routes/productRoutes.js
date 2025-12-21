const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const { protect } = require("../middleware/authMiddleware");
const controller = require("../controllers/productController");


const router = express.Router();


router.post("/", protect, upload.array("images", 5), controller.createProduct);
router.get("/", controller.getProducts);
router.delete("/:id", protect, controller.deleteProduct);


module.exports = router;