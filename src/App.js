import * as React from 'react';

import { LayoutDefault, LayoutReview } from './components';
import { Header } from './components/Header/Header';
import { styled, Link } from '@mui/material';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

export default function App() {
  const [isReview, setIsReview] = React.useState(false);

  return (
    <Wrapper>
      {isReview ? (
        <>
          <Header>
            <Link onClick={() => setIsReview(false)} color="#222222">
              Back
            </Link>
          </Header>
          <LayoutReview />
        </>
      ) : (
        <>
          <Header sx={{ justifyContent: 'flex-end' }}>
            <Link onClick={() => setIsReview(true)} color="#5B73FF">
              Just want to Pay
            </Link>
          </Header>
          <LayoutDefault />
        </>
      )}
    </Wrapper>
  );
}
