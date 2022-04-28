const GetAllProducts = require("../GetAllProducts");

jest.mock("../../../interfaces/storage");
jest.mock("../../use_cases");

describe("Obtener productos", () => {
  it("obtener todos los productos", async () => {
    const response = await GetAllProducts();
    expect(response).toEqual({
      id: 2,
      name: "Bicicleta",
      description: "Todo terreno de tres velocidades y freno disco",
      price: 2000000,
      image: null,
      active: "1",
    });
  });

  // it('productos no encontrados', async () => {
  // 	await expect(() => ChangePasswordTemporary()).toEqual([])
  // })

  // it('productos guardados', async () => {
  // 	const body = {
  // 		email: 'kevin.arango1022@viliv.com.co',
  // 		oldPassword: 'Jyx8RU',
  // 		newPassword: 'Password01',
  // 	}
  // 	await expect(() => ChangePasswordTemporary(body)).rejects.toThrow(
  // 		messages.ERROR_TEMPORARY_PASS_ALREADY_UPDATED
  // 	)
  // })
});
