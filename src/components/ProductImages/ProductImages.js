import React, { useState, useEffect } from 'react';
import ImagesBar from '../ImagesBar';
import {Img, View} from "../Styled";

const ProductImages = (props) => {
    const { images } = props;
    const [ main, setMain ] = useState();
    let carousel;
    const restartCarousel = () => {
        let index = images.indexOf(main !== undefined ? main : images[0])
        if(index === images.length)
            index = 0
        else
            index++
        carousel = setTimeout(() => setMain(images[index]), 5000)
    }

    useEffect(() => {
        if(images !== undefined){
            restartCarousel()
        }
        return () => clearTimeout(carousel)
    })

    if(images !== undefined){
        const changeMain = (string) => setMain(string)
        return (
            <>
                <View productImg>
                    {
                        main === undefined ?
                            <Img src={`http://localhost:4000/uploads/products/` + images[0]}/> :
                            <Img src={`http://localhost:4000/uploads/products/` + main}/>
                    }
                </View>
                <ImagesBar images={props.images} changeMain={changeMain}/>
            </>
        )
    }else
        return null
}

export default ProductImages;