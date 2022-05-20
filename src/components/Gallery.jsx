import { useEffect, useState } from "react";

function Gallery () {

    const [images, setImages] = useState(null);
    useEffect (() => {
        fetch("https://picsum.photos/v2/list")
        .then(response => response.json())
        .then(data => setImages(data))

    }, []);
    return (
        <div>
            <h1>Gallery</h1>
            <p>Ini adalah beberapa hasil dari Foto Kami</p>

             {images && images.map(image => (
                <img src={image.download_url} alt="" className="img-fluid"/>
            
            ))}

          
            {/* {images && <img src={images[0].download_url} alt="" className="img-fluid"/> }  */}
        </div>
    );
    
}

export default Gallery;