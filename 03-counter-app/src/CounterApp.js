import React, { useState } from 'react';
import PropTypes from 'prop-types'


const CounterApp = ( { value = 10} ) => {

    const [ counter, setCounter ] = useState( value ); //retorna un arreglo con 2 valores
    


    // handleAdd
    const handleAdd = () => {
        // setCounter( counter + 1);
        setCounter( (c) => c + 1 );
    }
    // handReset
    const handleReset = () => {
        setCounter( value );
    }


    return ( 
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={ () => setCounter( counter - 1) }>-1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleAdd }>+1</button>
        </>
    );
}


// Validando props
CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;

