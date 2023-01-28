const express = require("express");
const componentsRouter = express.Router();

const authRouter = require("./auths/auth.route");

componentsRouter.use("/auth", authRouter);

module.exports = componentsRouter;
