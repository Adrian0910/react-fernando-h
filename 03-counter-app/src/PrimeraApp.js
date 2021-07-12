
import React from 'react';
import PropTypes from 'prop-types';



// SFC => FC

const PrimeraApp = ( { saludo, subtitulo } ) => {

    /* const saludo2 = {
        nombre: 'Oxim',
        rango: 99
        const saludo = "Hola Mundo";
    } */


    return (
        <>
            {/*<h1> {JSON.stringify( saludo2 )} </h1>  Al no poder imprimir obj usamos el JSON */}
            {/*<pre> {JSON.stringify( saludo2 )} </pre>  En esta parte lo regresa copn otro formato */}
            {/*<pre> {JSON.stringify( saludo2, null, 3 )} </pre>  Aqui indicamos otras cosas para que se vea tipo ob, leer doc mozilla */}
            <h1> {saludo} </h1>
            <p> {subtitulo} </p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.number.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
}


export default PrimeraApp;

