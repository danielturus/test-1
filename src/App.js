import * as React from 'react';

import { Box, Container, Typography } from '@mui/material';
import { Card } from './components/Card/Card';
import { LayoutDefault } from './components/LayoutDefault/LayoutDefault';

export default function App() {
  const firstCard = {
    price: '$15 Per Stay',
    option: 'Early Checkin',
    description:
      'Checkin anytime from 9am on the day your booking starts. Normal checkin is 3pm',
  };

  const secondCard = {
    price: '$15 Per Stay',
    option: 'Late Checkout',
    description:
      'Checkout as late as 3pm on your last day with us. Normally 10am.',
  };

  const thirdCard = {
    price: '$65 Per Stay',
    option: 'Early Checkin',
    description:
      'Enjoy breakfast in out gourmet breakfast bar every day from 7am - 11am thoughout your booking.',
  };

  return (
    <LayoutDefault>
      <Container>
        <Box mt={2}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Treat yourself?
          </Typography>
          <Typography variant="p">
            Before you pay we thought the following add-ons might interest you.
          </Typography>
        </Box>

        <Card card={firstCard} />
        <Card card={secondCard} />
        <Card card={thirdCard} />
      </Container>
    </LayoutDefault>
  );
}
