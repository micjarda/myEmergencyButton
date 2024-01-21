const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  buttonId: {
    type: String,
    required: true
  },
    createdDate: {
    type: Date
  }
});

patientSchema.pre('save', function(next) {
  if (!this.createdDate) {
    this.createdAt = new Date();
  }
  next();
});

const PatientModel = mongoose.model('Patient', patientSchema);

module.exports = PatientModel;