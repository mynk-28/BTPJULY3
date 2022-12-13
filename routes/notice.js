const { Notice, validate } = require("../models/notice");

const express = require("express");
const router = express.Router();

// auth being middleware here
const auth = require("../middleware/auth");
const admin = require('../middleware/admin');

router.get("/", async (req, res) => {
    const answers = await Notice.find().sort({ createdAt: 'desc' }).limit(5).populate('user');
    // answers.reverse();
    res.send(answers);
});

router.post("/", auth, admin, async (req, res) => {

    // firstly validation is being done
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // destructuring
    const { title, body } = req.body;

    // making a new answer to be saved
    let notice = new Notice({
        user: req.user._id,
        title,
        body,
    });
    notice = await notice.save();
    res.send(notice);
});


module.exports = router;
