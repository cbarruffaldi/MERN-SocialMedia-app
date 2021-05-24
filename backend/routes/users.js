const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("It´s user route");
})

module.exports = router;