import * as React from "react";

import { Paper, Box, Typography, Button } from "@mui/material";

export function Card(props) {
  const card = props.card;

  return (
    <Paper
      sx={{
        borderRadius: 2
      }}
    >
      <Box mx={2} mt={2} mb={2} display="flex" flexDirection="column">
        <Box mt={2}>
          <Typography variant="p">{card.price}</Typography>
          <Typography variant="h6" sx={{fontWeight: 'bold'}}>{card.option}</Typography>
          <Typography variant= "p" color="gray">{card.description}</Typography>
        </Box>

        <Box mt={1} mb={2}>
          <Button variant="contained" color="primary" fullWidth sx={{
              borderRadius: 2
            }} style={{textTransform: "none" }}>
            
            Add
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
