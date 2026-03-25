function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fatoracao(n) {
  if (n < 0) throw new Error("Número deve ser positivo");
  if (n === 0 || n === 1) return 1;
  return n * fatoracao(n - 1);
}

module.exports = { fibonacci, fatoracao };