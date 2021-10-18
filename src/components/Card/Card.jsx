import { Paper, Box, Typography, Button } from "@mui/material";
import * as React from "react";

export function Card() {
  return (
    <Paper
      sx={{
        borderRadius: 4
      }}
    >
      <img width="100%" height="auto" src="https://picsum.photos/200/300" />
      <Box mx={2} mt={2} mb={2} display="flex" flexDirection="row">
        <Box flexGrow={1}>
          <Typography variant="h4">Title</Typography>
          <Typography variant="h5">Subtitle</Typography>
        </Box>

        <div>
          <Button variant="contained" color="primary">
            Reserve
          </Button>
        </div>
      </Box>
    </Paper>
  );
}
