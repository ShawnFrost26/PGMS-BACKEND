const mongoose = require("mongoose");
const validator = require("validator");

const grievanceSchema = new mongoose.Schema({
  patientName: { type: String, required: true, trim: true },
  patientId: { type: String, required: true, unique: true, trim: true },
  patientEmail: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email format");
      }
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: (value) => {
      if (!validator.isMobilePhone(value, "any")) {
        throw new Error("Invalid phone number format");
      }
    },
  },
  description: { type: String, required: true, trim: true },
  preferredResolution: { type: String, required: true, trim: true },
}, {
  timestamps: true,
});

const Grievance = mongoose.model("Grievance", grievanceSchema);

module.exports = Grievance;
