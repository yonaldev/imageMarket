const express = require("express");

const Market = express.Router();

const {
  getAllProducts,
  saveProduct,
  searchFilterProducts,
} = require("../../../interfaces/controllers/ProductController");

Market.get("/", getAllProducts);

Market.post("/", saveProduct);

Market.get("/search", searchFilterProducts);

module.exports = { Market };
