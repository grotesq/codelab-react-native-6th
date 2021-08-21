import React from 'react';
import { View } from 'react-native';

function Padding( { children, padding } ) {

    return (
        <View style={{ padding: padding ?? 20 }}>
            { children }
        </View>
    )
}

export default Padding;