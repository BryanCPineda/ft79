import { describe, expect, it } from "vitest";
import { suma } from "../../demo";


describe("Calculadora", () => {

    it("La funcion suma, se asegura  debe retornar la suma de dos valores", () => {

      expect( suma(1,1) ).toBe(2)
      expect( suma(2,5) ).not.toBeFalsy() 
      expect( suma(2,5) ).toBeTruthy()               
      expect( suma(2,5) ).toBe(7)  


    })

    it("La funcion suma, se asegure de recibir numeros en sus parametros", () => {

        const valor1 = null
        const valor2 = "string"
      
        expect( suma(valor1, valor2)).toBe('error: los valores recibidos no son numeros')

    })


})