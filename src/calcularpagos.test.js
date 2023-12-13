import montoPagar from "./cacularpagos";
describe("Calcular monto pagado de acuerdo a horas trabajadas", () => {
    it("Que no haya trabajado", () => {
      expect(montoPagar()).toEqual();
    });
    it("Que se le pague 30 bs por 2 horas de trabajo",()=>{
        expect(montoPagar(30,2)).toEqual(60);
    })
    it("Que se le pague 30 bs por 2 horas de trabajo",()=>{
        expect(montoPagar(30,120)).toEqual(3600);
    })
  });

