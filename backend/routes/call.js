const express = require("express");
const callController = require("../controllers/call");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const list = await callController.list();
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post("/create", async (req, res) => {
  const {
    buttonId,
    pushType
  } = req.body;
  try {
    const callCreate = await callController.create({
        buttonId,
        pushType
    });
    res.status(201).json(callCreate);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post(
  "/update",
  async (req, res) => {
    const { id, message, buttonId, pushType, answerd, answerdDate } = req.body;
    console.log(req.body)
    console.log(id, message, buttonId, pushType, answerd, answerdDate)
    try {
      const call = await callController.update(id, {
        message, buttonId, pushType, answerd 
      });
      if (!call) {
        return res.status(400).json({ error: "No such item" });
      }
      res.status(200).json(call);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
);

router.post("/name", async (req, res) => {
  try {
    const { buttonId } = req.body;
    const name = callController.name(buttonId);
    res.status(201).json(name);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const call = callController.deleteCall(id);
    res.status(201).json(call);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router