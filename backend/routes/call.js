const express = require("express");
const router = express.Router();

const callControler = require("../controllers/commands");

router.post("/create", async (req, res) => {
  console.log(req.body);
  const {
    buttonId,
    pushType
  } = req.body;
  try {
    const callCreate = await callControler.create({
        buttonId,
        pushType
    });
    res.status(201).json(callCreate);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router