import React from 'react';
import View from '../Styled/View';
import { Text } from '../Styled';

const ProductInfo = (props) => {
    const { name, dateRelease, price } = props.product;
    return (
        <View product>
            <View productInfo>
                <View alterDivForInfo >
                    <Text pFirst> Name </Text>
                    <Text pSecond> { name } </Text>
                </View>
                <View alterDivForInfo>
                    <Text pFirst> Date Release </Text>
                    <Text pSecond> { dateRelease } </Text>
                </View>
                <View alterDivForInfo >
                    <Text pFirst> Price </Text>
                    <Text pSecond> { price } </Text>
                </View>
            </View>
        </View>
    )
}

export default ProductInfo;