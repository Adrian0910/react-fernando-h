
const  personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , per3 ] = personajes;


console.log( per3 );

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

//Tarea
// El primer valor del arreglo se llamara nombre
// El segundo setNombre

const seState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}
const [nombre, setNombre] = seState( 'Goku ');

// arr[1]();

console.log( nombre )
setNombre();
