
// Desestructuracion 
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Master'
};

/* const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave); */

//Aqui podemos desestructurar desde el argumento que recibe la funcion
// en lugar de usar:  const retornaPersona = (usuario) => {
    //usariamos esto:
const seContext = ({ nombre, edad, clave, rango='Capitán' }) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2345,
            lng: -12.582
        }
    }

}

const {nombreClave, anios, latlng:{lat, lng}} = seContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);


