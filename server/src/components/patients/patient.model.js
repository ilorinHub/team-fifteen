const { model, Schema } = require("mongoose");

const patientSchema = new Schema({
  generalInfo: {
    firstName: {
      type: String,
      required: true,
    },
    psid: String,
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    profile_pic: String,
  },
  healthInfo: {
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    bloodType: String,
    occupation: String,
    nextOfKinFullName: {
      type: String,
      required: true,
    },
    nextOfKinPhoneNo: {
      type: String,
      required: true,
    },
    allergies: [],
  },
  medicInfo: {
    currentIllness: String,
    currentMedication: String,
    healthHistory: String,
  },
});

patientSchema.index(
  {
    psid: 1,
    email: 1,
  },
  {
    unique: true,
  }
);

const Patient = model("Patient", patientSchema);

module.exports = Patient;
