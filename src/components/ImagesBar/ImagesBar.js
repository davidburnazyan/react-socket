import React from 'react';
import View from '../Styled/View';
import { Thumbnail } from '../Styled';
import config from '../../helpers/config';

const ImagesBar = (props) => {
    const { images, changeMain} = props;
    const carousel = images.map((path,index) => {
        const ifOneImage = () => {
            if(images.length > 1){
                return <Thumbnail src={`${config.baseFilesPath}/uploads/products/` + path} onClick={() => { changeMain(path) }}/>
            }else {
                return <Thumbnail src={`${config.baseFilesPath}/uploads/products/` + path}/>
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