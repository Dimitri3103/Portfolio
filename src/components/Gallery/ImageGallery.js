import React from 'react'
import './ImageGallery.css'
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from "react-image-gallery"

const ImageGallery = (props) => {
    const imageList = props?.images?.map((image) => {
        return {
            original: image,
            thumbnail: image,
        }
    });
    return (
        <div>
            <Gallery items={imageList} showBullets={false} />
        </div>
    )
}

export default ImageGallery
