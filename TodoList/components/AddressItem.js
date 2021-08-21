import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function AddressItem( { item } ) {
    return (
        <View style={ styles.container }>
            <Text>{`[${item.zipNo}] ${item.roadAddr}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingVertical: 12,
        borderBottomColor: '#666',
        borderBottomWidth: 1,
    }
});

export default AddressItem;
