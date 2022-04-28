class ProductEntity {
  constructor({ name, description, price, image }) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}

module.exports = { ProductEntity };
