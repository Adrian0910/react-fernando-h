


// mi obj
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55689,
        lat: 14.3232,
        lng: 34.92


    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter'


console.log(persona2);
// las llaves crean el obj con una propiedad persona
console.log({persona});




