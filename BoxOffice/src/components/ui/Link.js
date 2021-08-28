import React from 'react';
import {Pressable} from 'react-native';
import Paragraph from './Paragraph';

export default function Link({children, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Paragraph>{children}</Paragraph>
    </Pressable>
  );
}
