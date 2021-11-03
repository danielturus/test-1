import * as React from "react";

import { Paper, Box, Typography, Button } from "@mui/material";

export function CardAddon(props) {

  return (
    <Paper
      sx={{
        borderRadius: 2
      }}
    >
      <Box m={4} display="flex" flexDirection="column">
        <Box mt={4}>
          <Typography variant="p">{props.price}</Typography>
          <Typography variant="h6" sx={{fontWeight: 'bold'}}>{props.title}</Typography>
          <Typography variant= "p" color="gray">{props.description}</Typography>
        </Box>

        <Box mt={2} mb={4}>
          <Button variant="contained" color="primary" fullWidth sx={{
              borderRadius: 2,
              textTransform: 'none'
            }}>
            Add
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
