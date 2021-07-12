import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    
    test('Debe de retornar un héroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );
        
        const heroeData = heroes.find( h => heroe.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe de retornar undefine si héroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        
        const heroesData = heroes.filter( h => h.owner === owner);
        expect(heroes).toEqual(heroesData);
    });

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );
        
        expect(heroe.length).toBe(2);
    });


});



