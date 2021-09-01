"use strict";

const express = require("express"),
  app = express(),
  cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions)); // attach cors middleware (must be set before of most route handlers to populate appropriate headers to response context)
app.use("/", express.static("./"));
app.listen(5100, () => console.log("APP STARTED"));
