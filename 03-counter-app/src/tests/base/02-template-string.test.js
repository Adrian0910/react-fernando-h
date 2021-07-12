
import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";



describe('Pruebas en 02-template-string', () => {
 
    test('getSaludo debe de retornar hola Oxim', () => {
        const nombre = 'Oxim';

        const saludo = getSaludo( nombre );
        
        expect( saludo ).toBe( 'Hola ' + nombre);

    })
    
    // getSaludo debe de retornar Hola Adrian si no hay argumento en el nombre
    test('getSaludo debe retornar Hola Adrian', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Adrian');
    });
});
