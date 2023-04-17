const express = require("express");
const router = express.Router();
const db = require("../database")
const controller = require("../controller/users");

router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);
router.get("/", controller.getAll);
router.get("/api/users", (req, res) => {
    var sql = "select * from user";
    var params = []

    console.log(req);
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message});
            return;
        }
        res.json({
            status: "success",
            data: rows,
        })
    })
})

module.exports = router;

