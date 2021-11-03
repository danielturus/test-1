import * as React from 'react';

import { styled } from '@mui/material';

const test = ({theme}) => {
  return {
    display: 'flex',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    justifyContent: 'space-between',
  };
};

export function Header({ children, sx }) {
  const Wrapper = styled('div')(test);

  return <Wrapper sx={sx}>{children}</Wrapper>;
}
