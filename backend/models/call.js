const mongoose = require('mongoose');

const callSchema = new mongoose.Schema({
  buttonId: {
    type: String,
    required: true,
  },
  pushType: {
    type: String,
  },
  message: {
    type: String,
    default: ""
  },
  answerd: {
    type: Boolean,
    default: false
  },
  answerdDate: {
    type: Date,
  },
  createdDate: {
    type: Date
  }
});

callSchema.pre('save', function(next) {
  if (!this.createdDate) {
    this.createdDate = new Date();
  }
  next();
});

const CallModel = mongoose.model('Call', callSchema);

module.exports = CallModel;
