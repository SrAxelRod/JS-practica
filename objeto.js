var miAuto = {
    marca: "Audi",
    modelo: "TT",
    año: 2012,
    color: "rojo",
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.color}`);
    }
};

miAuto.detalleDelAuto();

//"this" es una variable que hace referencia al objeto


//funcion constructora: generar un templay

function auto(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
auto

var autoNuevo = new auto("tesla", "model 3", 2020);
autoNuevo

var autoNuevo2 = new auto("tesla", "model X", 2018);
autoNuevo2

var autoNuevo3 = new auto("toyota", "corolla", 2020);
autoNuevo3
