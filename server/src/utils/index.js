const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const {
  config: { ENVIRONMENT, TOKEN_SECRET },
} = require("./config");
const { isArray, isObject, isString } = require("./validators");

const consoleLog = (data, forced) => {
  if (ENVIRONMENT !== "dev" && !forced) return;
  if (isObject(data)) {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(data, null, 2));
  } else {
    // eslint-disable-next-line no-console
    console.log(data);
  }
};
const handleResponse = (res, data, status = 200, err) => {
  if (err) consoleLog(err);
  if (status >= 400) {
    if (err && err.name && err.name === "MongoError") {
      if (err.code === 11000) return res.status(400).send("duplicate detected");
    }
  }
  if (isString(data)) {
    return res.status(status).json({
      message: data,
    });
  }
  if (isObject(data) || isArray(data)) {
    return res.status(status).json(data);
  }
  return res.status(status).send(data);
};
const generateToken = (data) =>
  jwt.sign(data, TOKEN_SECRET, {
    expiresIn: "3 days",
    issuer: `MyMedic-${ENVIRONMENT}`,
  });
const decodeToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
const hashPassword = (password) => bcrypt.hashSync(password, 4);
const checkPassword = (password, hash) => bcrypt.compareSync(password, hash);
const uid = () => uuidv4();
const generateId = (length = 9) =>
  Math.random().toString(36).substring(2, length);

module.exports = {
  hashPassword,
  checkPassword,
  consoleLog,
  generateId,
  uid,
  decodeToken,
  generateToken,
  handleResponse,
};
