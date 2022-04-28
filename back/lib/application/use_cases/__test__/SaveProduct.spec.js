const SaveProduct = require("../SaveProduct");

jest.mock("../../../interfaces/storage");

describe("Guardar productos", () => {
  it("producto guardado en base de datos", async () => {
    const product = {
      name: "Televisor",
      description: "40 pulgadas y pantalla full hd",
      price: 2,
      image: null,
    };

    const response = await SaveProduct(product);

    expect(response).toEqual({
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
  });

  it("producto guardado en base de datos", async () => {
    const product = {
      name: null,
      description: null,
      price: null,
      image: null,
    };

    await expect(() => SaveProduct(product)).rejects.toThrow(
      "Error en la inserción"
    );
  });

  // it('User not found', async () => {
  // 	const vid = 'e9d421371b49cae67eb63947a22ef018'
  // 	await expect(() => GetUserBasicInfo(vid)).rejects.toThrow(
  // 		messages.USER_NOT_FOUND
  // 	)
  // })

  // it('Handler Error invalid token', async () => {
  // 	const vid = ''
  // 	await expect(() => GetUserBasicInfo(vid)).rejects.toThrow(
  // 		messages.INVALID_TOKEN
  // 	)
  // })

  // it('Error invalid token', async () => {
  // 	const vid = 1234
  // 	await expect(() => GetUserBasicInfo(vid)).rejects.toThrow(
  // 		messages.INVALID_TOKEN
  // 	)
  // })
});
