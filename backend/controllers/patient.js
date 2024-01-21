const patientSchema = require("../models/patient");
const list = async () => {
  try {
    const patient = await patientSchema.find();
    return patient;
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    const patient = new patientSchema(body);
    await patient.save();
    return patient;
  } catch (error) {
    throw error;
  }
};

const deletePatient = async (id) => {
  try {
    const patient = await patientSchema.findOneAndDelete({
      _id: id,
    });
    return patient;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  list,
  create,
  deletePatient
};
