import React from 'react';
import { View, HTag } from '../../components/Styled';

const NotFound = () => {
    return (
        <View error404>
            <HTag error404>
               Ops 404 page
            </HTag>
        </View>
    )
}

export default NotFound