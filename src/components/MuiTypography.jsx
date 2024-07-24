import React from "react";
import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 style Heading h1 gap and margin bottom 0.35em)
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle1 Heading</Typography>
      <Typography variant="subtitle2">subtitle2 Heading</Typography>

      <Typography variant="body1">
        body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        officiis!
      </Typography>
      <Typography variant="body2">
        body2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>

      <Typography variant="button">button Heading</Typography>

      <Typography variant="inherit">inherit Heading</Typography>

      <Typography variant="overline">overline Heading</Typography>

      <Typography variant="caption">caption Heading</Typography>
    </div>
  );
}

export default MuiTypography;
