const express = require("express");

const RouterMain = express.Router();
const { Market } = require("./market.routes");

RouterMain.use("/api/v1/image-market", Market);

module.exports = { RouterMain };
