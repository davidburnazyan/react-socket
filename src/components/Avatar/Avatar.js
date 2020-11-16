import React from 'react';
import { View, Img, Label, Input } from '../Styled';

const Avatar = (props) => {
    const { src, callBack } = props;
    return (
        <View>
            <View signUpImage>
                <Label htmlFor="image">
                    <Img sign src={src}/>
                </Label>
                <Input type="file" id="image" onChange={callBack} hidden/>
            </View>
        </View>
    )
}
export default Avatar;