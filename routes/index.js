const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("All posts!");
});

module.exports = router;