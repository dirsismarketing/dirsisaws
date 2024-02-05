const telefonos = require("./agenda.js");
buscarportelefono("39-")
function buscarportelefono(telefono){
    const contacto = telefonos.filter((x) => x.number.startsWith(telefono));
    let contactoclon={...contacto}
    console.log(contacto);
}


/*
function mostrarContacto(id){
    const contacto = telefonos.find((x) => x.id === id);
    console.log(contacto);
}

/*
borrarcontacto("351-3807748");
function borrarcontacto(nro){
    telefonos2 = telefonos.filter((x) => x.number != nro);
    console.log(telefonos2);
}
/*
let nuevo = {
    id: 8,
    name: "Diego",
    number: "351-3807748",
};
agregarobjeto(nuevo);
function agregarobjeto(nuevo){
    telefonos.push(nuevo);
    console.log(telefonos);
}

//cantidadtelefono();
//mostrartelefonos();
//mostrarContacto(2);
/*
function cantidadtelefono(){
    console.log(telefonos.length);
}

function mostrartelefonos(){
    console.log(telefonos);
}




*/

/*
const Chance = require("chance");
const chance = new Chance();

const randomEmail = chance.email();
const randomAge = chance.age();
const randomName = chance.name();

console.log(randomAge,randomEmail,randomName);
*/


