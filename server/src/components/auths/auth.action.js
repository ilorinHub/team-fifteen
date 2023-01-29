const Patient = require("../patients/patient.model");
const Access = require("../access/access.model");
const ms = require("ms");

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
const { authConfigs } = require("../../utils/config");

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
    allergies,
    currentIllness,
    currentMedication,
    healthHistory,
    password,
  } = req.body;

  //new patient payload
  const patientData = {
    generalInfo: {
      firstName,
      lastName,
      email,
      phoneNo,
      address,
      psid: "PT-" + uid(),
      profile_pic: "",
    },
    healthInfo: {
      gender,
      age,
      bloodType,
      occupation,
      nextOfKinFullName,
      nextOfKinPhoneNo,
      allergies,
    },
    medicInfo: {
      currentIllness,
      currentMedication,
      healthHistory,
    },
  };

  try {
    //check if user is existing
    const isUserExisting = await Patient.findOne({ email });

    //is user exists return message
    if (isUserExisting) return handleResponse(res, "User already exists", 409);

    //save new patient data
    const newPatient = await new Patient(patientData).save();

    //collecting the hash details of the patient browser
    const {
      hash: deviceHash,
      components: {
        useragent: { browser, os },
        geoip,
      },
    } = req.fingerprint;

    //creating new access
    const newPatientAccess = await new Access({
      patient_id: newPatient._id,
      access_keys: {
        security_code: uid(),
        activation: uid(),
      },
      password,
      last_login: Date.now(),
    }).save();

    //generating new hash
    const token = generateToken(
      {
        deviceId: deviceHash,
        accessId: newPatientAccess._id,
        ref: newPatient._id,
        authKey: newPatientAccess.access_keys.security_code,
      },
      {
        expiresIn: authConfigs.sessionLivespan,
      }
    );

    //on success send appropriate message
    return handleResponse(
      res,
      {
        message: "Welcome to MyMedic",
        payload: {
          token,
          patient: {
            firstName: newPatient.generalInfo.firstName,
            lastName: newPatient.generalInfo.lastName,
            email: newPatient.generalInfo.email,
            phoneNo: newPatient.generalInfo.phoneNo,
          },
        },
      },
      201
    );
  } catch (error) {
    return handleResponse(res, "Internal server error", 500, error);
  }
}

async function doLogin(req, res) {
  const { email, password, psid } = req.body;

  try {
    //writing a mongodb query using the or operator
    const patientQuery = { $or: [] };

    //If email exists, it should be pushed into the mongodb query
    if (email) patientQuery.$or.push({ email: email.toLowerCase() });

    //If psid exists, it should be pushed into the mongodb query
    if (psid) patientQuery.$or.push({ psid });

    //we can check the database if any of them exists
    const patient = await Patient.findOne(patientQuery);

    //return error if info are incorrect
    if (!patient) {
      return handleResponse(res, "Incorrect credentials", 401);
    }

    //fiind patient access using their id
    const access = await Access.findOne({
      patient_id: patient._id,
    });

    //return error if info are incorrect
    if (!access) return handleResponse(res, "Incorrect credentials", 401);

    //check if patient password is correct or not
    if (!checkPassword(password, access.password)) {
      return handleResponse(res, "Incorrect credentials", 401);
    }

    //collecting the hash details of the patient browser
    const { hash: deviceHash } = req.fingerprint;

    access.last_login = Date.now();

    await access.save();

    const token = generateToken(
      {
        deviceId: deviceHash,
        accessId: access._id,
        ref: patient._id,
        authKey: access.access_keys.security_code,
      },
      {
        expiresIn: authConfigs.sessionLivespan,
      }
    );

    const patientData = patient.toJSON();

    patientData.patient = {
      firstName: patientData.generalInfo.firstName,
      lastName: patientData.generalInfo.lastName,
      email: patientData.generalInfo.email,
      phoneNo: patientData.generalInfo.phoneNo,
    };

    delete patientData._id;

    return handleResponse(res, {
      message: `Welcome ${patientData.generalInfo.firstName}`,
      payload: {
        token,
        patient: patientData.patient,
      },
    });
  } catch (error) {
    return handleResponse(res, "Internal server error", 500, error);
  }
}

async function doLogOut(req, res) {}

module.exports = {
  doSignUp,
  doLogin,
};
