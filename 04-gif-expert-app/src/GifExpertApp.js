import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //En este caso lo hacemos con un useState porque con el arreglo no podemos mutar los datos
    const [categories, setCategories] = useState(['Evangelion']);

    //Agregar elemento al arreglo
    /* const handleAdd = () => {
        // setcategories([...categories, 'Naruto']);
        setcategories( cat => [...cat, 'Naruto']);
    } */

    return (
        <>
            <div className="grid justify-items-center bg-yellow-100">
                <h2 className="font-mono text-6xl  animate__animated animate__rubberBand text-blue-400">GifExpertApp</h2>
            </div>
            <AddCategory setCategories={ setCategories }/>
            <ol>
                {
                    /* Debemos definir el indice del elemento, en este caso key={category}*/
                    categories.map(  category =>
                        <GifGrid 
                            key={ category }
                            category={ category } />
                        )
                }
            </ol>
        </>
    )
}





