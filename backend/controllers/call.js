const CallSchema = require("../models/call");
const PatientSchema = require("../models/patient")

const list = async () => {
  try {
    const list = await CallSchema.find();
    return list;
  } catch (error) {
    throw error;
  }
};
const create = async (call) => {
  try {
    const mongocall = CallSchema(call);
    await mongocall.save();
    return mongocall;
  } catch (error) {
    throw error;
  }
};

const update = async (id, body) => {
  try {
    const call = await CallSchema.findOneAndUpdate(
      { _id: id },
      {
        ...body,
      }
    );
    return call;
  } catch (error) {
    throw error;
  }
};

const name = async (id) => {
  try {
    console.log(id)
    const name = await PatientSchema.findOne({ buttonId: id });
    console.log('Found patient:', name);
    return name;
  } catch (error) {
    throw error;
  }
};

const deleteCall = async (id) => {
  try {
    const patient = await CallSchema.findOneAndDelete({
      _id: id,
    });
    return patient;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  list,
  update,
  name,
  deleteCall
};
