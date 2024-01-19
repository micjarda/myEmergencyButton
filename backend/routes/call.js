const express = require("express");
const router = express.Router();

const shopControler = require("../controllers/commands");

router.post("/create", async (req, res) => {
  console.log(req.body);
  const {
    buttonId
  } = req.body;
  try {
    const shopList = await shopControler.create({
        buttonId
    });
    res.status(201).json(shopList);
  } catch (error) {
    res.status(500).json({ error: "chyba" });
  }
});

module.exports = router