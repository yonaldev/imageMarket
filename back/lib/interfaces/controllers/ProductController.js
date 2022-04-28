const {
  ResponseHandler,
} = require("../../infrastructure/webserver/handler/responseHandler");

const {
  GetAllProducts,
  SaveProduct,
  SearchFilterProducts,
} = require("../../application/use_cases");

module.exports = {
  async getAllProducts(req, res, next) {
    try {
      const data = await GetAllProducts();

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async saveProduct(req, res, next) {
    try {
      const data = await SaveProduct(req.body);

      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },

  async searchFilterProducts(req, res, next) {
    try {
      const data = await SearchFilterProducts(req.query.search);
      next(new ResponseHandler(200, data));
    } catch (error) {
      next(error);
    }
  },
};
