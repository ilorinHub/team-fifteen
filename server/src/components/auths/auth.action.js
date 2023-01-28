const Patient = require("../patients/patient.model");

const {
  checkPassword,
  consoleLog,
  decodeToken,
  generateId,
  generateToken,
  handleResponse,
  hashPassword,
  uid,
} = require("../../utils");

async function doSignUp(req, res) {
  const {
    firstName,
    lastName,
    email,
    phoneNo,
    address,
    gender,
    age,
    bloodType,
    occupation,
    nextOfKinFullName,
    nextOfKinPhoneNo,
    currentIllness,
    currentMedication,
    healthHistory,
  } = req.body;

  try {
    const isExisting = await Patient.findOne({ email });

    const newPatient = {
      generalInfo: {
        firstName,
        lastName,
        email,
        phoneNo,
        address,
        psid: "PT-" + uid,
      },
    };
    console.log(isExisting);
  } catch (error) {}
}

async function doLogin(req, res) {}

module.exports = {
  doSignUp,
  doLogin,
};
