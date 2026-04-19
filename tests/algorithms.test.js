const { fibonacci, fatoracao } = require("../src/algorithms");

test("fibonacci(0) === 0", () => expect(fibonacci(0)).toBe(0));
test("fibonacci(1) === 1", () => expect(fibonacci(1)).toBe(1));
test("fibonacci(6) === 8", () => expect(fibonacci(6)).toBe(8));
test("fibonacci(10) === 55", () => expect(fibonacci(10)).toBe(55));
test("fatoracao(0) === 1", () => expect(fatoracao(0)).toBe(1));
test("fatoracao(1) === 1", () => expect(fatoracao(1)).toBe(1));
test("fatoracao(5) === 120", () => expect(fatoracao(5)).toBe(120));
test("fatoracao(10) === 3628800", () => expect(fatoracao(10)).toBe(3628800));
test("fatoracao(-1) should throw an error", () => expect(() => fatoracao(-1)).toThrow("Número deve ser positivo"));