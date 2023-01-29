require("dotenv").config();

const express = require("express");

const { join } = require("path");

const fingerPrint = require("express-fingerprint");

const connect_to_db = require("./db");

const app = express();
const cors = require("cors");
const morgan = require("morgan");

const appRouter = require("./components/componentsRouter");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.urlencoded({ extended: false, limit: "1mb" }));

app.use(express.json({ limit: "1mb" }));

app.use(express.static(join(__dirname, "..", "public")));

app.use(fingerPrint());

connect_to_db().then(() => {});

app.use(appRouter);

// app.get("/*", (req, res) => {
//   res.sendFile(join(__dirname, "..", "public", "index.html"));
// });

module.exports = app;
