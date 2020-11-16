import React from 'react';
import View from '../Styled/View';
import { Thumbnail } from '../Styled';

const ImagesBar = (props) => {
    const { images, changeMain} = props;
    const carousel = images.map((path,index) => {
        const ifOneImage = () => {
            if(images.length > 1){
                return <Thumbnail src={`http://localhost:4000/uploads/products/` + path} onClick={() => { changeMain(path) }}/>
            }else {
                return <Thumbnail src={`http://localhost:4000/uploads/products/` + path}/>
            }
        }
        return (
            <View key={index} fixed>
                {
                    ifOneImage()
                }
            </View>
        )
    })
    return (
        <View flex>
            { carousel }
        </View>
    )
}

export default ImagesBar;