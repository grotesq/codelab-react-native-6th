import React, { useState } from 'react';
import { Button, Switch, Text } from 'react-native';
import Row from './Row';

function TodoItem( { id, label, isDone, onSwitchChange, onDelete } ) {
    return (
        <Row style={{ alignItems: 'center', marginBottom: 12, }}>
            <Switch
                value={ isDone }
                onValueChange={ value => onSwitchChange( id, value ) }
                style={{ marginRight: 8, }}
            />
            <Text style={{ color: isDone ? '#eee' : '#000', flex: 1 }}>
                { label ?? '(내용 없음)' }
            </Text>
            <Button title="삭제" onPress={() => onDelete( id )}/>
        </Row>
    )
}

export default TodoItem;