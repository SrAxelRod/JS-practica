var frutas = ["manzana", "banana", "pera", "naranja"];

console.log(frutas);
(4) ["manzana", "banana", "pera", "naranja"]

console.log(frutas.length);
4

console.log(frutas[2]);
"pera"

//si quiero agregar mas elementos a mi array principal, tengo dos metodos:

//metodo push: agregar elemento al final del array
var masFrutas = frutas.push("uvas");

//metodo pop: quitar ultimo elemento del array
var menosFrutas = frutas.pop("uvas");

//para agragar un elemento al incio del array, utilizamos "unshift"
var nuevaLongitud = frutas.unshift("mandarina");

//para eliminar el elemento que esta al inicio del array, utilizamos "shift"
var borrarLongitud = frutas.shift("mandarina");

//Indexof: para mutar un array (conocer la posicion del elemento dentro del array
var posicion = frutas.indexOf("naranja")
posicion = 3


//METODOS DE RECORRIDOS DE ARRAYS:

/*FILTER: crea un nuevo array con los elementos del array que se paso como parametro,
y que cumplan con la condicion definida*/
var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 370},
    {nombre: "celular", costo: 1000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 1000
});
articulosFiltrados

/*MAP: crea un nuevo array con los resultados de la llamada a la funcion aplicada,
 a cada uno de sus elementos*/

var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 370},
    {nombre: "celular", costo: 1000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
nombreArticulos

//FIND
var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 370},
    {nombre: "celular", costo: 1000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "celular"
});
encuentraArticulos

//forEach

var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 370},
    {nombre: "celular", costo: 1000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

articulos.forEach(function(articulo){
    console.log(articulo.costo)
});

//SOME:
var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "libro", costo: 370},
    {nombre: "celular", costo: 1000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 300
});

