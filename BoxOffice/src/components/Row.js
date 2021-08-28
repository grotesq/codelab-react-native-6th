import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
`;

export default function Row({children}) {
  return <Container>{children}</Container>;
}
