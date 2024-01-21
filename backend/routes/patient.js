const express = require("express");
const patientController = require("../controllers/patient");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const list = await patientController.list();
    res.status(200).json(list);
  } catch {
    res.status(500).json({ error: "Can't get list." });
  }
});

router.post("/create", async (req, res) => {
  const {
    name,
    buttonId
  } = req.body;
  try {
    const patient = await patientController.create({
      name,
      buttonId
    });
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post(
  "/updatepatient/:id",
  async (req, res) => {
    const { id } = req.params;
    const { name, buttonId } = req.body;
    try {
      const bazaarItem = await bazaarControler.updateBazaarItem(id, {
        name,
        buttonId
      });
      if (!bazaarItem) {
        return res.status(400).json({ error: "No such item" });
      }
      res.status(200).json(bazaarItem);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
);

router.post("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const patient = patientController.deletePatient(id);
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router