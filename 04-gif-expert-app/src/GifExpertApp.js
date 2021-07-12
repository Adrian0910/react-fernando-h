import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //En este caso lo hacemos con un useState porque con el arreglo no podemos mutar los datos
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    //Agregar elemento al arreglo
    /* const handleAdd = () => {
        // setcategories([...categories, 'Naruto']);
        setcategories( cat => [...cat, 'Naruto']);
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => {
                        /* Debemos definir el indice del elemento, en este caso key={category}*/
                        return <li key= {category} > {category}</li>
                    })
                }
            </ol>
        </>
    )
}





