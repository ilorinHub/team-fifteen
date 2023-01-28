const express = require("express");
const { doLogin, doSignUp } = require("./auth.action");

const authRouter = express.Router();

authRouter.post("/login", doLogin);
authRouter.post("/signup", doSignUp);
// authRouter.get("/", )

module.exports = authRouter;
