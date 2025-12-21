const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  res.json({
    title: req.body.title,
    content: req.body.content,
    image: req.file.filename
  });
});

module.exports = router;
