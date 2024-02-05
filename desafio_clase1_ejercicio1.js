/*
Ejercicio 1
Tienes una lista de objetos con los nombres de los miembros de una familia y sus edades (mínimo 6 miembros). Este script debe contener las siguientes funciones:
*/

let familia = [];
familia.push({nombre:"marti",edad:23},{nombre:"diego",edad:52},{nombre:"bea",edad:51},{nombre:"abril",edad:18},{nombre:"juan",edad:11},{nombre:"berli",edad:4});

/*
-Devolver dos objetos, uno con el nombre y edad del miembro de mayor edad y el del de menor edad.
*/
console.log("Ejercicio 1");
let respuesta1 = mayorymenor(familia);
console.log("Mayor Edad------------------");
console.log(respuesta1[0]);
console.log("Menor Edad------------------");
console.log(respuesta1[1]);

/*
-Mostrar el promedio de edades de la familia.
*/
let respuesta2 = promedio(familia);
console.log("Promedio Edad------------------");
console.log(respuesta2);

/*
-Mostrar cuántos miembros son mayores a 20 años.
*/
let respuesta3 = mayores(familia,20);
console.log("Mayores a 20------------------");
console.log(respuesta3);
/*
-Permitir ingresar un nuevo miembro y mostrar todos por consola.
*/
let nuevonombre = prompt("Ingrese Nombre");
let nuevoedad = +prompt("Ingrese Edad");
familia.push({nombre:nuevonombre,edad:nuevoedad});
for (i=0;i<familia.length;i++){
    console.log(familia[i].nombre,familia[i].edad);
}

function mayorymenor(familia){
    let mayor=0
    let menor=200;
    let indicemayor=indicemenor=0;
    for (i=0;i<familia.length;i++){
        if (familia[i].edad>mayor) {
            mayor=familia[i].edad
            indicemayor=i;
        }
        if (familia[i].edad<menor) {
            menor=familia[i].edad
            indicemenor=i;
        }
    }
    let result= [];

    result.push({nombre:familia[indicemayor].nombre,edad:familia[indicemayor].edad})
    result.push({nombre:familia[indicemenor].nombre,edad:familia[indicemenor].edad})
    return result
}

function promedio(familia){
    let suma=0;
    for (i=0;i<familia.length;i++){
        suma += familia[i].edad
    }
    let result= suma / familia.length;
    return result
}

function mayores(familia,mayora){
    let suma=0;
    for (i=0;i<familia.length;i++){
        if (familia[i].edad>mayora){
            ++suma;
        }
    }
    return suma
}






