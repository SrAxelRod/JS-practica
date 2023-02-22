//Loops: "for" and "for...of"

//Primera opcion: "for"

var estudiantes = ["Axel", "Darío", "Mariano", "Tomas", "Gonzalo"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//Segunda opcion: "for...of"

var estudiantes = ["Axel", "Darío", "Mariano", "Tomas", "Gonzalo"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//Loop: "while"

var estudiantes = ["Axel", "Darío", "Mariano", "Tomas", "Gonzalo"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

//mientras lo que este dentro de "()" sea verdad, se va a generar el loop