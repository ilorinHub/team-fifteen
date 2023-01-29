const express = require("express");
const componentsRouter = express.Router();

const authRouter = require("./auths/auth.router");
const patientRouter = require("./patients/patient.router");

componentsRouter.use("/auth", authRouter);
componentsRouter.use("/patient", patientRouter);

module.exports = componentsRouter;
