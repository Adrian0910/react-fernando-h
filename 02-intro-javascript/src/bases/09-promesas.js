import { getHeroeById } from './bases/08-imp-exp'

/* const promesa = new Promise((resolve, reject) => {

  setTimeout(() => {
    const p1 = getHeroeById(2);
    resolve(p1);
  }, 2000)
});

promesa.then((heroe) => {
  console.log('heroe', heroe)
})
.catch( error => console.warn(error))
 */

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        const p1 = getHeroeById(id);
        setTimeout(() => {
            if (p1) {
                resolve(p1);
            }else{
                reject();
            }
        }, 2000)
      });
      
}

getHeroeByIdAsync(5)
    .then(console.log)
    .catch(console.log('Hubo un error'))

