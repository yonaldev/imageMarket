const SearchFilterProducts = require("../SearchFilterProducts");

jest.mock("../../../interfaces/storage");
jest.mock("../../use_cases");

describe("Buscar productos", () => {
  it("productos encontrados en la búsqueda", async () => {
    const response = await SearchFilterProducts("za");
    expect(response).toEqual({
      id: 3,
      name: "Zapatos",
      description: "Para hacer deporte",
      price: 200000,
      image: null,
      active: "1",
    });
  });

  it("ningún producto encontrados", async () => {
    const response = await SearchFilterProducts("bi");
    expect(response).toEqual({});
  });

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
