import React from 'react';
import { StyleSheet, View } from 'react-native';

function Row( { children, style } ) {
    return (
        <View style={ [ styles.row, style ] }>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    }
})

export default Row;