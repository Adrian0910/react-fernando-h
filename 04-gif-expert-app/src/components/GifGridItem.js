
import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( {id, title, url} ) => {

    // console.log({id, title, url})

    return (
        <div className="grid justify-items-center bg-green-200 border-4 border-black w-11/12 m-4 p-10">
            <img 
                src={ url } alt={ title }
                className="h-screen max-h-96 w-full max-w-md min-w-full rounded-2xl" 
                />
            <p className="font-mono text-2xl pt-4"> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}



