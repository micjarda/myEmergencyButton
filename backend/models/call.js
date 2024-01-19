const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
  buttonId: {
    type: String,
    required: true,
  },
  pushType: {
    type: String,
    required: true,
  },
});

const CallModel = mongoose.model('Call', callSchema);

module.exports = CallModel;
