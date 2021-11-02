import * as React from 'react';

import { styled } from '@mui/material';

export function Header({ children }) {
  const Wrapper = styled('div')({
    display: 'flex',
    marginTop: 24,
    marginLeft: 16,
    marginRight: 16,
  });

  let direction;
  if (children.props.children.length <= 4) {
    direction = 'flex-start';
  } else {
    direction = 'flex-end';
  }

  return (
    <Wrapper
      sx={{
        justifyContent: direction,
      }}
    >
      {children}
    </Wrapper>
  );
}
