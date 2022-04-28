module.exports = class {
  getAllProducts() {
    return new Promise((resolve, reject) => {
      try {
        resolve({
          id: 2,
          name: "Bicicleta",
          description: "Todo terreno de tres velocidades y freno disco",
          price: 2000000,
          image: null,
          active: "1",
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  searchFilterProducts(input) {
    return new Promise((resolve, reject) => {
      try {
        if (input === "za") {
          resolve({
            id: 3,
            name: "Zapatos",
            description: "Para hacer deporte",
            price: 200000,
            image: null,
            active: "1",
          });
        } else {
          resolve({});
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  saveProduct(product) {
    return new Promise((resolve, reject) => {
      try {
        if (product.name !== null) {
          resolve({
            data: {
              active: "1",
              id: 3,
              name: "Zapatos",
              description: "Para hacer deporte",
              price: 200000,
            },
            message: "Datos insertados correctamente",
            status: true,
          });
        } else {
          throw "Error en la inserción"();
        }
      } catch (error) {
        reject(error);
      }
    });
  }
};
