import * as React from "react";

import { Box, Container, Typography } from '@mui/material';
import { CardAddon } from "../Card/CardAddon";

export function LayoutDefault() {
  const firstCard = {
    title: 'Early Checkin',
    price: '$15 Per Stay',
    description:
      'Checkin anytime from 9am on the day your booking starts. Normal checkin is 3pm',
  };

  const secondCard = {
    title: 'Late Checkout',
    price: '$15 Per Stay',
    description:
      'Checkout as late as 3pm on your last day with us. Normally 10am.',
  };

  const thirdCard = {
    title: 'Early Checkin',
    price: '$65 Per Stay',
    description:
      'Enjoy breakfast in out gourmet breakfast bar every day from 7am - 11am thoughout your booking.',
  };


  return (
      <Container>
        <Box mt={3}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Treat yourself?
          </Typography>
          <Typography>
            Before you pay we thought the following add-ons might interest you.
          </Typography>
        </Box>

        <CardAddon
          title={firstCard.title}
          price={firstCard.price}
          description={firstCard.description}
        />
        <CardAddon
          title={secondCard.title}
          price={secondCard.price}
          description={secondCard.description}
        />
        <CardAddon
          title={thirdCard.title}
          price={thirdCard.price}
          description={thirdCard.description}
        />
      </Container>
  );
}
