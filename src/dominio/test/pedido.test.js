import { Pedido } from '../pedido.js';

describe('Pedido', () => {
  
  test ("crear un pedido dia", () => {
    let pedido = new Pedido("Lunes", "Menu", "22/10/2000", "Comensal");
    expect(pedido.getDia()).toBe("Lunes");
  });

  test ("crear un pedido detalle", () => {
    let pedido = new Pedido("Lunes", "Menu", "22/10/2000", "Comensal");
    expect(pedido.getDetalle()).toBe("Menu");
  });

  test ("crear un pedido fecha", () => {
    let pedido = new Pedido("Lunes", "Menu", "22/10/2000", "Comensal");
    expect(pedido.getFecha()).toBe("22/10/2000");
  });

  test ("crear un pedido comensal", () => {
    let pedido = new Pedido("Lunes", "Menu", "22/10/2000", "Comensal");
    expect(pedido.getComensal()).toBe("Comensal");
  });

  test ("crear un pedido dia vacio", () => {
    let pedido = new Pedido("", "Menu", "22/10/2000", "Comensal");
    const error = "El dia no puede estar vacio";
    expect(() => pedido.isValid()).toThrow(error);
  });

  test ("crear un pedido detalle vacio", () => {
    let pedido = new Pedido("Lunes", "", "22/10/2000", "Comensal");
    const error = "El detalle no puede estar vacio";
    expect(() => pedido.isValid()).toThrow(error);
  });

  test ("crear un pedido fecha vacio", () => {
    let pedido = new Pedido("Lunes", "Menu", "", "Comensal");
    const error = "La fecha no puede estar vacia o ser invalida";
    expect(() => pedido.isValid()).toThrow(error);
  });

  test ("crear un pedido fecha invalida", () => {
    let pedido = new Pedido("Lunes", "Menu", "Esto no es una fecha", "Comensal");
    const error = "La fecha no puede estar vacia o ser invalida";
    expect(() => pedido.isValid()).toThrow(error);
  });

  test ("crear un pedido comensal vacio", () => {
    let pedido = new Pedido("Lunes", "Menu", "22/10/2000", "");
    const error = "El comensal no puede estar vacio";
    expect(() => pedido.isValid()).toThrow(error);
  });

});