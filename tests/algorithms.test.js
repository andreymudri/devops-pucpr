import { fibonacci, fatoracao } from "../src/algorithms";

test("fibonacci(0) === 0", () => expect(fibonacci(0)).toBe(0));
test("fibonacci(6) === 8", () => expect(fibonacci(6)).toBe(8));
test("fatoracao(5) === 120", () => expect(fatoracao(5)).toBe(120));
test("fatoracao(0) === 1", () => expect(fatoracao(0)).toBe(1));