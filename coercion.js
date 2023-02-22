4 + "7"; // 47
4 * "7"; // 28
2 + true; // 2
false - 3; // - 3
!3; // false

//Valores: truthy and falsy

Falsy

// Coersión explicita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

Truthy

// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true
Boolean([]) // true
Boolean({}) // true
