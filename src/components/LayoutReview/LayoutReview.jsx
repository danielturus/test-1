import * as React from 'react';

import { Paper, Button, Link, Box, Container, Typography } from '@mui/material';

export function LayoutReview() {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '90%' }}
    >
      <Box mt={6}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Review Booking
        </Typography>
        <Typography>
          Please review your booking and then pay to finalise the reservation.
        </Typography>
      </Box>

      <Box
        mb={4}
        mt={6}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Rooms
        </Typography>
        <Link color="#5B73FF">Add more</Link>
      </Box>

      <Paper
        sx={{
          borderRadius: 2,
        }}
      >
        <Box m={4} display="flex" flexDirection="row">
          <Typography color="gray" flexGrow="1">1x</Typography>
          <Link color="#808080" flexGrow="5">Pigalle Bunk</Link>
          <Typography color="gray">£480</Typography>
        </Box>

        <Box m={4} display="flex" flexDirection="row">
          <Typography color="gray" flexGrow="1">1x</Typography>
          <Link color="#808080" flexGrow="5">Pigalle Bunk</Link>
          <Typography color="gray">£480</Typography>
        </Box>
      </Paper>

      <Box mt={6}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Totals
        </Typography>
      </Box>

      <Paper
        sx={{
          borderRadius: 2,
        }}
      >
        <Box
          mx={4}
          mt={4}
          mb={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography color="gray">Sub-Total</Typography>

          <Typography color="gray">£1046</Typography>
        </Box>

        <Box
          mx={4}
          mb={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography color="gray">Tax</Typography>

          <Typography color="gray">£24</Typography>
        </Box>

        <Box
          mx={4}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography color="gray">Total</Typography>

          <Typography sx={{ fontWeight: 'bold' }}>£1060</Typography>
        </Box>
      </Paper>

      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <Link color="#222222" >Pay with Card</Link>
        <Box my={2} width="100%">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mb: 4,
              borderRadius: 1,
              textTransform: 'none',
            }}
          >
            Pay
          </Button>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              borderRadius: 1,
              textTransform: 'none',
            }}
          >
            Pay2
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
