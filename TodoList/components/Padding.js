import React from 'react';
import { StyleSheet, View } from 'react-native';

function Padding( { children, padding, style } ) {
    return (
        <View style={ [ { padding: padding ?? 20 }, style ]}>
            { children }
        </View>
    )
}
export default Padding;