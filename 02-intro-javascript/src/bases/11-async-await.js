
const getImagen = async () => {
    try {
        const apiKey = '3f3LaMXN16Ls2g2WyCHuivwjI4iaHJv3';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json()
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild( img );
    } catch (error) {
        console.log(error);
    }
}

getImagen();



