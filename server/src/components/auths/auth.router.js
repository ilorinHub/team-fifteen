const express = require("express");
const { doLogin, doSignUp } = require("./auth.action");
const { signupPolicy } = require("./auth.policy");

const authRouter = express.Router();

authRouter.post("/login", doLogin);
authRouter.post("/signup", signupPolicy, doSignUp);
// authRouter.get("/", )

module.exports = authRouter;
