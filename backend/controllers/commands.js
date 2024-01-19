const CallSchema = require("../models/call")
const create = async (call) => {
  try {
    const mongocall = CallSchema(call);
    await mongocall.save();
    return mongocall;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    create
};
