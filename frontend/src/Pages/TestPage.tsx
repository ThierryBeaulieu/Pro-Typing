import React from "react";
import { Box, Grid, Typography } from "@mui/material";


export default function TestPage() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on medium and larger
        alignItems: "center",
        textAlign: { xs: "center", md: "left" }, // Center text on small screens
      }}
    >
      {/* Image */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://via.placeholder.com/300"
          alt="Example"
          sx={{
            width: "100%", 
            maxWidth: "400px",
            display: "block",
            mx: "auto", // Center image on small screens
          }}
        />
      </Grid>

      {/* Text */}
      <Grid item xs={12} md={6}>
        <Typography variant="h4">Your Text Here</Typography>
        <Typography variant="body1">
          This text will be on the right of the image on larger screens, 
          but will go above the image on smaller screens.
        </Typography>
      </Grid>
    </Grid>
  );
}