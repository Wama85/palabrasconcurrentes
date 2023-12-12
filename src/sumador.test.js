import ocurrencia from "./palabras.js";

describe("Contar palabras repetidas en una oración", () => {
  it("Que no existe ninguna ocurrencia", () => {
    expect(ocurrencia('')).toEqual({});
  });
  it("Que existe ocurrencia en una palabra", () => {
    expect(ocurrencia('casa')).toEqual({'casa':1});
  });
  it("Contar ocurrencias en dos palabras", () => {
    
    expect(ocurrencia('la casa')).toEqual({'la':1,'casa':1});
  });
  it("Contar ocurrencias en tres palabras y dos repetidas", () => {
    
    expect(ocurrencia('casa la casa del')).toEqual({'la':1,'casa':2, 'del':1});
  });

});


