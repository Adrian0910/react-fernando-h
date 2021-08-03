
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

   
    const { data:images , loading } = useFetchGifs( category );
    console.log(loading)
    return (
        /* bg-yellow-100 */
        <>
            <div className="bg-yellow-100 m-4 grid justify-center">
                <div className="animate__animated animate__fadeIn ml-5 p-6 text-3xl 
                    rounded-full border-4 border-pink-400 w-auto max-w-md grid justify-items-center bg-black text-pink-400"> {category}
                </div>
            </div>
           { loading ? <p className="animate__animated animate__flash 
            loading grid justify-items-center text-purple-400 text-6xl my-48 p-2
            ">Loading...</p> : null }
            <div className="grid grid-cols-3 bg-yellow-100">
                    {
                            images.map( (img) => (
                                <GifGridItem 
                                    key = {img.id}
                                    {...img }
                                />
                            ))
                    }
                
            </div>
        </>
    )
}


  

