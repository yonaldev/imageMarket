module.exports = class {
  constructor(repository) {
    this.repository = repository;
  }

  getAllProducts() {
    return this.repository.getAllProducts();
  }

  saveProduct(product) {
    return this.repository.saveProduct(product);
  }

  searchFilterProducts(search) {
    return this.repository.searchFilterProducts(search);
  }
};
