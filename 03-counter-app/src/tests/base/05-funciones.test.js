import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";
import '@testing-library/jest-dom';

describe('Pruebas de Funciones', () => {
    
    test('getUser debe de retornar un obj', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
    }

    const user = getUser();
    console.log(user)
    expect( user ).toEqual( userTest );

    });

    //getUsuarioActivo debe retornar un obj
    test('getUsuarioActivo debe retornar un obj', () => {
        
        const nombre = 'Oxim';
        const userName = getUsuarioActivo( nombre );

        const userActive = {
            uid: 'ABC567',
            username: nombre
        }
        expect( userName ).toEqual( userActive );

    })
    
});



