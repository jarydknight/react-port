import React from 'react';
import PhotoList from '../PhotoList';

const Gallery = (props) => {

    // const projects = [
    //     {
    //         name: "travel-blog",
    //         img: "../../assets/images/placeholder.jpg",
    //         link: ""
    //     },
    //     {
    //         name: "social-network-api",
    //         img: "../../assets/images/placeholder.jpg",
    //         link: ""
    //     },
    //     {
    //         name: "text-editor",
    //         img: "../../assets/images/placeholder.jpg",
    //         link: ""
    //     },
    //     {
    //         name: "e-commerce",
    //         img: "../../assets/images/placeholder.jpg",
    //         link: ""
    //     }
    // ]

    const { currentCategory } = props;

    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    )
}

export default Gallery;