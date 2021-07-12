import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas con async-await y Fetch', () => {
    
    test('debe retornar el url de la imágen', async() => {
        
        const url = await getImagen();
        console.log(url);
        expect( typeof url ).toBe( 'string' );


    });



});







