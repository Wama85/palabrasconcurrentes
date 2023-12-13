import ocurrencia from "./palabras.js";

describe("Contar palabras repetidas en una oración", () => {
  it("Que no existe ninguna ocurrencia", () => {
    expect(ocurrencia('')).toEqual({});
  });
  it("Que existe una ocurrencia", () => {
      expect(ocurrencia('hola')).toEqual({'hola':1});
    });
  it("Que existe dos palabras con una ocurrencia", () => {
      expect(ocurrencia('hola como')).toEqual({'hola':1, 'como':1});
    });
  it("Que existe tres palabras con dos ocurrencia", () => {
      expect(ocurrencia('hola como hola')).toEqual({'hola':2, 'como':1});
    });
  




});


