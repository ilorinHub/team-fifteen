const express = require("express");
const { getPatients } = require("./patient.action");

const patientRouter = express.Router();

patientRouter.get("/", getPatients);

module.exports = patientRouter;
