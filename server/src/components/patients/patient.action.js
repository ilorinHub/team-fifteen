const Patient = require("../patients/patient.model");
const { handleResponse } = require("../../utils");

async function getPatients(req, res) {
  try {
    const patients = await Patient.find({});
    return res.status(200).json({
      message: "Your data has been fetched succesfully",
      data: patients,
    });
  } catch (error) {
    return handleResponse(res, error, 500);
  }
}

module.exports = { getPatients };
