
// Asi no
function saludar(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar('Goku'));

//Asi si
const saludar2 = function(nombre2){
    return `Hola, ${nombre2}`;
}

console.log(saludar2('Vegeta'));

// Arrow functions
const saludar3 = (nombre2) => `Hola, ${nombre2}`;

console.log(saludar3('Picoro'));

// Para regresar mas de un argumento hacemos uso de los ()
const getUser = () =>
    ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    })

console.log(getUser);

// Tarea
// Tranformar a arrow funtion
// Retornar un obj implicito
// Pruebas
const getUsuarioActivo = (nombre) =>
    ({
        uid: 'ADC123',
        username: nombre
    });
 const usuarioActivo = getUsuarioActivo('Oxim');
console.log(usuarioActivo);


