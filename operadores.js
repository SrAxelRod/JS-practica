//operadores artimeticos: operaciones básicas: suma, resta, multiplicación y división

// Suma
2 + 3 // 5
// Resta
5 - 3 // 2
// Multiplicación
4 * 2 // 8
// División
6 / 2 // 3
//división entre 0 devolvera = infinity

//operador del residuo(%)
//Residuo
21 % 5 // 1

//Operador de concatenacion: une dos o mas String
"Hola " + "Platzi" // Hola Platzi 

/*operador de incremento y decremento: el operador de incremento (++) y decremento (--) 
consiste en aumentar o disminuir en una unidad a la variable. Estos operadores se pueden emplear antes
o despues de la variable*/
variable++
variable--
++variable
--variable
/*Sin embargo, si el operador se emplea antes de la variable, aumenta (o disminuye) y devuelve el valor actual
y si se emplea despues de la variable, aumenta (o disminuye) pero devuelve el valor anterior*/
var a = 3
var b = 3

console.log(a++) //3
console.log(++b) //4
console.log(a) //4
console.log(b) //4

//Operador de asignación (=): asigna un valor a la variable
var saludo = "Hola mundo"

/*operadores de asignacion combinada: en ciertos casos, reasignaras la variable mas otro valor.
Estas variables pueden utilizarse como acumuladores o contadores*/
var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador) // 3

/* una forma de evitar estar repitiendo la variable de reasignacion, es combinarlas con los operadores
aritmeticos antes del operador de asignacion*/

//Asignación de suma	        a += b	 a = a + b
//Asignación de resta	        a -= b	 a = a - b
//Asignación de multiplicación	a *= b	 a = a * b
//Asignación de multiplicación	a /= b	 a = a / b

//operadores de comparacion: compara dos o mas valores y devuelve un valor logico (V o F)

//operadores de igualdad: 
/* igualdad por valor(==): compara dos variables solamente por su valor. Ej "3" == 3 son iguales
igualda por valor y tipo de dato (===): compara dos variables por su valor y tipo de dato.
"3" === 3 no son iguales*/
//Igualdad
"3" == 3 // true
3 == 3 // true

// Igualdad estricta
"3" === 3 // false
3 === 3 // true

//operadores de desigualdad:
/*desigualdad por valor(!=)
desiguladad por valor y tipo de dato(!==)*/
//Desigualdad
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta
"3" !== 3 // true
3 !== 3 // false

//operadores de mayor o menor: 
// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true

/*operadores logicos: Los operadores lógicos comparan dos o más expresiones
y devuelve un valor lógico (verdadero o falso). Las expresiones son comparaciones entre valores
se utiliza en conjunto con los operadores de comparación*/

/*operador de disyuncion logico: El operador de disyunción o AND (&&) devuelve verdadero,
si y solo si, ambos valores son verdaderos. Se lee de la siguiente manera:
“La expresión 1 es verdadero Y la expresión 2 es verdadero, entonces es verdadero”*/
var a = 15
var b = 5

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false

//operador de union logico:
/*El operador de unión u OR (||) devuelve verdadero, si y solo si, alguna expresión es verdadero.
Se lee de la siguiente manera: “La expresión 1 es verdadero O la expresión 2 es verdadero,
entonces es verdadero”.*/
var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true

//operador de negacion:
/*El operador de negación o NOT (!) devuelve el valor lógico contrario a la expresión.
Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.*/
var a = 5

!(a < 0) // true


