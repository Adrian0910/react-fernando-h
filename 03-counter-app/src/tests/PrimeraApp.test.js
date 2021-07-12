import {shallow} from 'enzyme'

import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    
    /* test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
        
        const saludo = 123;
        const {getByText} = render( <PrimeraApp saludo={ saludo } />)

        expect( getByText(saludo) ).toBeInTheDocument();

    }); */

    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = "Hola, soy Goku";
        const wrapper = shallow( <PrimeraApp saludo={saludo}/>);

        
    });

});



