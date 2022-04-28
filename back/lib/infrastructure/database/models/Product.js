const { DataTypes } = require("sequelize");
const { sequelize } = require("../../../infrastructure/database/mysql");

const Products = sequelize.define(
  "Products",
  {
    id: {
      type: DataTypes.STRING(36),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    name: {
      type: DataTypes.STRING(36),
      allowNull: false,
      field: "name",
    },
    description: {
      type: DataTypes.BIGINT(20),
      allowNull: true,
      field: "description",
    },
    price: {
      type: DataTypes.DECIMAL(100),
      allowNull: true,
      defaultValue: null,
      field: "price",
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: "image",
    },
    active: {
      type: DataTypes.ENUM,
      values: ["1", "0"],
      defaultValue: "1",
      allowNull: false,
      field: "active_row",
    },
  },
  {
    tableName: "tbl_products",
    timestamps: false,
  }
);

module.exports = { Products };
