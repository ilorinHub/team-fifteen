const joi = require("joi");

const { handleResponse } = require("../../utils");

const handleError = (res, error) =>
  handleResponse(res, error.details[0].message, 400);

const signupPolicy = (req, res, next) => {
  const schema = joi.object({
    address: joi.string().required(),
    password: joi.string().min(6).required(),
    email: joi.string().email().required(),
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    phoneNo: joi.string().required(),
    profile_pic: joi.string(),
    age: joi.string().required(),
    gender: joi.string().required(),
    bloodType: joi.string(),
    occupation: joi.string(),
    nextOfKinFullName: joi.string().required(),
    nextOfKinPhoneNo: joi.string().required(),
    currentIllness: joi.string(),
    currentMedication: joi.string(),
    healthHistory: joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) return handleError(res, error);

  return next();
};

const loginPolicy = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);

  if (error) return handleError(res, error);

  if (!req.body.psid && !req.body.email) {
    return handleResponse(res, '"PSID" or "email" is required');
  }

  return next();
};

module.exports = { signupPolicy, loginPolicy };
