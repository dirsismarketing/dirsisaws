console.log("Ejercicio2");
/*
Ejercicio 2
La máquina cuenta con 30 monedas de 10 y 50 monedas de 5.
El precio de todos los productos es múltiplo de 5
La máquina soporta solo billetes de: 50, 100, 200, 500, 1.000, 2.000.
*/

let titulo = "Valor del Producto:";
/*-Se ingresa el valor del producto (múltiplo de 5).*/
while (true){
    var valora = +prompt(titulo);
    if (valora % 5){
        titulo="El valor $"+valora+" no es multiplo de 5";
    }else{
        break;
    }   
}
let moneda30=10;
let moneda5=50;
let emoneda30;
let emoneda5=0;

for (i=1;i<moneda30;i++){
    if (valora<30){
        emoneda30=i-1;
        break;
    }
    valora=valora-30
}
console.log(valora);
if (valora!=0){
    for (i=1;i<moneda5;i++){
        if (valora<5){
            emoneda5=i-1;
            break;
        }
        valora=valora-5
    }
}
if (valora!=0){
    /*-En caso que el cambio no alcance se imprime “no hay cambio suficiente”*/
    console.log("no hay cambio suficiente”");
}else{
    /*-Se debe imprimir cuantas monedas de 10 y cuántas de 5 hay que entregar.*/    
    console.log("Se Entrego "+emoneda30+" de $30");
    console.log("Se Entrego "+emoneda5+" de $5");
}
