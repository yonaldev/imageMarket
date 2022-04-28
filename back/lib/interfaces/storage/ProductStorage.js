const { Op } = require("sequelize");

const { Products } = require("../../infrastructure/database/models/Product");

module.exports = class {
  constructor() {
    this.model = Products;
  }

  getAllProducts() {
    return new Promise(async (resolved, reject) => {
      try {
        const where = { active: "1" };
        const result = await this.model.findAll({ where });
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  saveProduct(product) {
    return new Promise(async (resolved, reject) => {
      try {
        const result = await this.model.create(product);
        if (result) {
          resolved({
            data: result.dataValues,
            message: "Datos insertados correctamente",
            status: true,
          });
          return;
        }

        resolved({
          message: "Error al insertar",
          status: false,
        });
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  searchFilterProducts(search) {
    return new Promise(async (resolved, reject) => {
      try {
        const where = {
          [Op.or]: {
            id: {
              [Op.eq]: search,
            },
            name: {
              [Op.like]: `%${search}%`,
            },
            description: {
              [Op.like]: `%${search}%`,
            },
          },
        };

        const result = await this.model.findAll({ where });
        resolved(result);
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
};
